import { writeFileSync } from "fs"


export const escreverArquivo = (object) => {
  writeFileSync("./src/database/db.json", JSON.stringify(object))
}