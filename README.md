## todos

1.  A loading screen is expected while fetching the `data.json` from the server. You can use the `raw` file directly from Github or serve it from a local server. ✅

2.  The 3 drop-down lists at the top should filter the data. `Select School` should have the option to `Show all`. ✅

3.  A chart renders the data of the selected schools similar to the image above. ✅

4.  On the right of the screen, the total number of lessons is displayed for the selected Camp, School, and Country, followed by a list of the schools with how many lessons each offers. ✅

5.  The school's list from **point 4** should include toggles to show or hide the line chart of a certain school. ✅

6.  Upon clicking on a point in the chart from **point 3**, the app should navigate to another page where all the details of that item are shown. No UX is provided, but use a simple layout that shows: like country, camp, school, month, and a number of lessons. ✅

7.  After coming back from the details page implemented in **point 6**, the last filtering state should be preserved.✅

## Chellanges

### Dealing with json.data

I noticed right away that the data in this format would be a challenge to work with. The basic idea is to loop over the array, get the data we want, store common keys, etc. This approach will have a lot of problems with performance, and we will have a headache linking the data together again. So I asked myself two questions:

1.  **What is the ideal data structure**
    I came up with something like this.

```
[
  {
    country:
     camp: ["each object specific to country and camp"]
  }
  ...
]
```

2.  **How to implement it**
    That was a bit of a challenge, but after a lot of thinking, I remembered a reducer function pattern I saw it a year ago in a [javascript30](http://javascript30.com/) video.
    It was something like this:
    We have an array of transportation types and we want to know how many times each one exists in the array.
    the sloution was

```
const transportation = data.reduce(function(obj, item) {
if (!obj[item]) {
obj[item] = 0;
}
obj[item]++;
return obj;
}, {});

console.log(transportation);//
{
    "car": 5,
    "truck": 3,
    "bike": 2,
    "walk": 2,
    "van": 2,
    "pogostick": 1
}
```

But I chose to create it with Map, why Map? I tried to make it with objects but I faced some weird behavior. After dealing with weird behavior, I decided to make the Map virsion also. because Map is faster and predicable.

After hours and hours of coding, I came up with this

```
const  sortedData = data.reduce((mappedData, item) => {
if (!mappedData.get(item.country) || !mappedData.get(item.country)[item.camp]) {
mappedData.set(item.country, { ...mappedData.get(item.country), [item.camp]: {} });
}

if (!mappedData.get(item.country)[item.camp][item.school]) {
mappedData.set(item.country, {
...mappedData.get(item.country),
[item.camp]: {
...mappedData.get(item.country)[item.camp],
[item.school]: [],
},
});
}
mappedData.set(item.country, {
...mappedData.get(item.country),
[item.camp]: {
...mappedData.get(item.country)[item.camp],
[item.school]: [...mappedData.get(item.country)[item.camp][item.school], item],
},
});
return  mappedData;
}, new  Map());
```

[codeSandbox link](https://codesandbox.io/s/rearrangeddata-y78m6x?file=/src/index.js)

## improve the sloution with immerjs 😍

alot of `...` is going on hhh, It's extremely dense and difficult to manage; I can't count the number of times I forget to spread something and the output changes.  
So it was a need to improv it.  
After a lot of coding and digging in docs, I gave up. I thought it was impossible,  
but the good part is I gave it a second try and I finally made it. 🎉

```
import  produce  from  "immer";
enableMapSet();

const  sortedData = produce(new  Map(), (draft) => {
return  data.reduce((mappedData, item) => {
if (!mappedData.get(item.country) || !mappedData.get(item.country)[item.camp]) {
mappedData.set(item.country, {
...mappedData.get(item.country),
[item.camp]: {},
});
}
if (!mappedData.get(item.country)[item.camp][item.school]) {
mappedData.get(item.country)[item.camp][item.school] = [];
}
mappedData.get(item.country)[item.camp][item.school].push(item);
return  mappedData;
}, draft);
```

and that is the solution I currently use. [Link](https://github.com/dev-mkr/analysis-fe-challenge/blob/main/src/utilities/reArrangeData.ts)

### Was it worth it ?

Absolutely yes. It made dealing with the state a breeze, and it was very performant; we only looped over the data once, and it was ready to serve.
