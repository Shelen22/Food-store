async function getMeal(url){
    let res = await fetch(url)
    let data = await res.json()

    return data;
}
function append(data, home){

    data.meals.forEach(({strMeal,strMealThumb}) => {

        let div = document.createElement("div");
        let p = document.createElement("p");
        p.innerText = strMeal;

        let img = document.createElement("img");
        img.src = strMealThumb;

        div.append(img,p);
        home.append(div);
        
    });
}
function randomD(data, random){

    data.meals.forEach(({strMeal,strMealThumb,strInstructions}) => {

        let div = document.createElement("div");
        
        let p = document.createElement("h3");
        p.innerText = strMeal;

        let p1 = document.createElement("p");
        p1.innerText = strInstructions;


        let img = document.createElement("img");
        img.src = strMealThumb;

        

        div.append(img,p,p1);
        random.append(div);
        
    });
}

function latest(data, latestr){

    data.categories.forEach(({strCategory,strCategoryThumb,strCategoryDescription}) => {

        let div = document.createElement("div");
        let p = document.createElement("h3");
        p.innerText = strCategory;

        let p1 = document.createElement("p");
        p1.innerText = strCategoryDescription;


        let img = document.createElement("img");
        img.src = strCategoryThumb;

        div.append(img,p,p1);
        latestr.append(div);
        
    });
}


export {getMeal, append,randomD,latest}