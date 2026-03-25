import express from "express";
import { buscarNoticias } from "../servicos/scraping-noticias.js";

const router = express.Router();

router.get("/", async (_req, res) => {
    try {
        const noticias = await buscarNoticias(3);
        res.render("paginas/pagina-inicial", { noticias });
    } catch (e) {
        console.error("Erro ao buscar notícias para home:", e.message);
        res.render("paginas/pagina-inicial", { noticias: [] });
    }
});

router.get("/noticias", async (_req, res) => {
    try {
        const noticias = await buscarNoticias();
        res.render("paginas/noticias", { noticias });
    } catch (e) {
        console.error("Erro ao buscar notícias:", e.message);
        res.render("paginas/noticias", { noticias: [] });
    }
});

router.get("/NTM/sobre", async (_req, res) => {
    res.render("paginas/NTM/sobre-ntm");
});

router.get("/NTM/equipe", async (_req, res) => {
    res.render("paginas/NTM/nossa-equipe");
});

router.get("/NTM/na-escola", async (_req, res) => {
    res.render("paginas/NTM/ntm-na-escola");
});

router.get("/NTM/formacao-continuada", async (_req, res) => {
    res.render("paginas/NTM/formacao-continuada");
});

router.get("/institucional/sobre", async (_req, res) => {
    res.render("paginas/INSTITUCIONAL/sobre-secretaria");
});

router.get("/institucional/secretario", async (_req, res) => {
    res.render("paginas/INSTITUCIONAL/secretario");
});

router.get("/institucional/organograma", async (_req, res) => {
    res.render("paginas/INSTITUCIONAL/organograma");
});

export default router;
