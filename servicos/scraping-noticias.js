import * as cheerio from "cheerio";

const URL_NOTICIAS = "https://prefeiturademossoro.com.br/categoria/educacao";
const CACHE_TTL_MS = 10 * 60 * 1000;

let cache = { noticias: null, timestamp: 0 };

function formatarData(dataStr) {
    if (!dataStr) return "";
    const limpa = dataStr.trim();

    return limpa;
}

export async function buscarNoticias(limite = null) {
    const agora = Date.now();
    if (cache.noticias && agora - cache.timestamp < CACHE_TTL_MS) {
        return limite ? cache.noticias.slice(0, limite) : cache.noticias;
    }

    const resposta = await fetch(URL_NOTICIAS, {
        headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" },
        signal: AbortSignal.timeout(15000),
    });

    if (!resposta.ok) throw new Error(`Erro ao buscar notícias: ${resposta.status}`);

    const html = await resposta.text();
    const $ = cheerio.load(html);
    const noticias = [];
/* Scrapping das notícias do link  https://prefeiturademossoro.com.br/categoria/educacao */

/* Para pegar as informações das notícias do link, é feito
scrapping das informações utilizado a função fetch do javascript, junto com o método .find().
*/

    $("#list-noticias .col-md-3").each((_i, el) => {
        /* O método .find() pega as informações da classe dentro da tag no link e armazena na variável. 
        Sempre que o layout do link mudar, é preciso entrar no link, verificar a nova classe utilizando F12 (inspetor de código), e
        atualizar a  respectiva classe dentro do método .find() */

        const tituloEl = $(el).find("p a.text-pmmblue").first();
        const titulo = tituloEl.text().trim();
        const link = tituloEl.attr("href") || $(el).find("a").first().attr("href") || "";

        if (!titulo) return;

        const data = formatarData($(el).find("div.text-green.fs-7").first().text());
        const categoria = $(el).find("div.fs-7 a.text-green").first().text().trim() || "Educação";
        const img = $(el).find("span.aspect-16-9 img").first().attr("src") || "";

        noticias.push({ titulo, link, data, img, categoria, descricao: "" });
    });

    cache = { noticias, timestamp: agora };
    return limite ? noticias.slice(0, limite) : noticias;
}
