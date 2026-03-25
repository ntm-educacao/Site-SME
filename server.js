import express from "express"
const app = express()
import path from "path"
const __dirname = import.meta.dirname;
const PORT = 8080;
import router from "./rotas/pagina-inicial-rotas.js"

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.use(express.static(path.join(__dirname, "public")))
app.use(express.json())

app.use("/", router)

app.listen(PORT, () => {
    console.log(`servidor rodando na porta ${PORT}`)
})