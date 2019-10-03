const Seleniuminfra = require("*/seleniuminfra")
const seleniuminfra = Seleniuminfra()

// אין מה להריץ את הקוד, למעשה אין לי שום ניסיון מעשי בהתמודדות על הנושא הזה
// ניתן רק לראות את מה שהבנתי בערך עד כה בנושא זה ולהבין איכן הפערים
// כיוון ששאר התרגיל הוא המשך ישיר וזהה בעקרונותיו אז אני מגיש את התרגיל הראשון בלבד
// מתוך הבנה שזה מספק להסקת מסקנות
// תודה וסליחה
    class TodosPage {
        constructor(URL) {
            seleniuminfra.getUrl("https://elevation-local-todo.herokuapp.com/")
        }

 async insertAndDelete(todoText) {
     await seleniuminfra.clickElement("id", "addToDo")
     await seleniuminfra.write(todoText, "id", "todo-input")
    //  await getTextFromElement("id", "todo-input", Element, fromElemnt ){

      
    //  }
    await seleniuminfra.isElementExists(element , todoText);{
        let element
        try {
            element = await this.driver.findElement(By["id"]("todo-input"))
            return true
            console.log( `New div has the same text`)
        }
        catch{
            return false
            console.log(`Error: Can’t find a new div`)
        }
    }
    await seleniuminfra.clickElement( "data-id" ,  " " ,  "span"); {

    }
    await seleniuminfra.isElementExists(locatorType , locatorValue);{
        let element
        try {
            element = await this.driver.findElement(By["data-id"](todoText))
            return true
            console.log(`The div was not deleted`)
        }
        catch{
            return false
            console.log(`The div was deleted`)
        }
    }
    }
 }

insertAndComplete(todoText) {

}

insertTwoDeleteFirst(todoText) {

}

}

