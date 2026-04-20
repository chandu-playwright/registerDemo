import{test, expect} from "@playwright/test"

test("register website only fill options",async({page})=>{


    await page.goto("https://demo.automationtesting.in/Register.html")
    
    await page.fill("[ng-model='FirstName']","Budireddy")

    await page.waitForTimeout(2000)

    await page.fill("[ng-model='LastName']","Chandra Shekhar")
    
    await page.fill('[ng-model="Adress"]',"koppaka, rto office  near durgama temple")
    await page.fill('[ng-model="EmailAdress"]',"budireddychandu@gmail.com")
    await page.waitForTimeout(2000)

    await page.fill('[ng-model="Phone"]',"9885992068")

    await page.waitForTimeout(2000)

})

// now check boxes and radio button's


test("register website , now using checkboxs and radio buttons ",async({page})=>{


    await page.goto("https://demo.automationtesting.in/Register.html")

  let checkBOxs =  page.locator('[value="Male"]')

  await checkBOxs.check()

  expect(checkBOxs).toBeChecked()


  let radio = page.locator('[value="Cricket"]')
  let radio1 = page.locator('[value="Movies"]')

  await radio.check()
  await expect(radio).toBeChecked()

  await radio1.check()
  await expect(radio1).toBeChecked()


})

// click options  

test("multiSelector using clicks", async({page})=>{


    await page.goto("https://demo.automationtesting.in/Register.html")

    await page.click("#msdd")

    await page.click("text=Czech")
    await page.click("text=Dutch")

    await page.click("text=Hindi")
})

// using selector options 

test("using selctor option",async({page})=>{

    await page.goto("https://demo.automationtesting.in/Register.html")

    await page.selectOption("#Skills",{value:"Adobe InDesign"})

    await page.selectOption("#Skills",{value:"APIs"})
    await page.waitForTimeout(2000)

    await page.selectOption("#countries",{label:"Select Country"})
    await page.waitForTimeout(3000)

    // expect dropdown !
    
    
    




   





})
// another date of birth 

test("date of birth",async({page})=>{

  await page.goto("https://demo.automationtesting.in/Register.html")


 await  page.selectOption("#yearbox",{value:"1921"}) 

 await page.selectOption('[ng-model="monthbox"]', { value: "January" });

 await page.selectOption('#daybox',{value:"4"})
})

//password

test("password value",async({page})=>{

await page.goto("https://demo.automationtesting.in/Register.html")


await page.fill("#firstpassword","chanduReddy")

await page.fill("#secondpassword","chanduReddy")
await page.waitForTimeout(2000)

await page.locator("#submitbtn").click()



await page.setInputFiles("#imagesrc", "tests/imag.png");

await page.waitForTimeout(2000)


})