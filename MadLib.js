/*
 Eli Watson's Mad-Lib Generator
 TODO:
 -Let users input words
 done-add diffrent stories that are also randomized
 done-actual good html that inserts it into the document instead of just displaying the console
 -get better at coding so this isn't a hot mess
*/

const adjectives = ["Dirty", "Ugly", "Big", "Small", "Stinky", "Shiny", "Happy", "Sad", "Bright", "Dark", "Quiet", "Loud", "Strong", "Weak", "Clever"];
const verbs = ["Run", "Jump", "Swim", "Smell", "Look", "Sleep", "Sail", "Dig", "Fly", "Think", "Eat", "Sing", "Dance", "Read"];
const nouns = ["Apple", "Boot", "Boy", "Girl", "Watch", "Phone", "Cat", "Dog", "House", "Car", "Tree", "Book", "Computer", "River", "Mountain"];
const numbers = [1, 2, 45, 78, 80, 99, 7, 5, 10, 25, 50, 75, 100, 200, 500];
const colors = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Black", "White", "Gray", "Brown", "Cyan", "Magenta", "Teal", "Lime"];
let storyNum = 0
const randomWordSet = randomWords(adjectives, verbs, nouns, numbers, colors);

//Function gets words from arrays and gets a random word. 
//There are so many becuase thats the solorion to not having the same adj. in evrey sentence and 6 seemed like enough
function randomWords(adjectives, verbs, nouns, numbers, colors,) {
    return {
        // random words 1-6
        randomAdj1: adjectives[Math.floor(Math.random() * adjectives.length)],
        randomVerb1: verbs[Math.floor(Math.random() * verbs.length)],
        randomNoun1: nouns[Math.floor(Math.random() * nouns.length)],
        randomNum1: numbers[Math.floor(Math.random() * numbers.length)],
        randomCol1: colors[Math.floor(Math.random() * colors.length)],
        
        randomAdj2: adjectives[Math.floor(Math.random() * adjectives.length)],
        randomVerb2: verbs[Math.floor(Math.random() * verbs.length)],
        randomNoun2: nouns[Math.floor(Math.random() * nouns.length)],
        randomNum2: numbers[Math.floor(Math.random() * numbers.length)],
        randomCol2: colors[Math.floor(Math.random() * colors.length)],

        randomAdj3: adjectives[Math.floor(Math.random() * adjectives.length)],
        randomVerb3: verbs[Math.floor(Math.random() * verbs.length)],
        randomNoun3: nouns[Math.floor(Math.random() * nouns.length)],
        randomNum3: numbers[Math.floor(Math.random() * numbers.length)],
        randomCol3: colors[Math.floor(Math.random() * colors.length)],

        randomAdj4: adjectives[Math.floor(Math.random() * adjectives.length)],
        randomVerb4: verbs[Math.floor(Math.random() * verbs.length)],
        randomNoun4: nouns[Math.floor(Math.random() * nouns.length)],
        randomNum4: numbers[Math.floor(Math.random() * numbers.length)],
        randomCol4: colors[Math.floor(Math.random() * colors.length)],

        randomAdj5: adjectives[Math.floor(Math.random() * adjectives.length)],
        randomVerb5: verbs[Math.floor(Math.random() * verbs.length)],
        randomNoun5: nouns[Math.floor(Math.random() * nouns.length)],
        randomNum5: numbers[Math.floor(Math.random() * numbers.length)],
        randomCol5: colors[Math.floor(Math.random() * colors.length)],

        randomAdj6: adjectives[Math.floor(Math.random() * adjectives.length)],
        randomVerb6: verbs[Math.floor(Math.random() * verbs.length)],
        randomNoun6: nouns[Math.floor(Math.random() * nouns.length)],
        randomNum6: numbers[Math.floor(Math.random() * numbers.length)],
        randomCol6: colors[Math.floor(Math.random() * colors.length)]
        
    };
}

// Actually make the mad lib
function madLib(words, storyNum) {
    storyNum = Math.floor(Math.random() * 11);
    let result = "";   
    // switch betwen diffrent stories
    switch (storyNum) {
        case 0:
            result += `A <span style="color: red">${words.randomAdj1}</span> <span style="color: red">${words.randomNoun1}</span> decided to <span style="color: red">${words.randomVerb1}</span> through the <span style="color: red">${words.randomAdj2}</span> woods. Everything looked <span style="color: red">${words.randomCol1}</span>, and it felt <span style="color: red">${words.randomAdj3}</span>. After <span style="color: red">${words.randomNum1}</span> minutes, the <span style="color: red">${words.randomNoun2}</span> found a <span style="color: red">${words.randomAdj4}</span> creature that started to <span style="color: red">${words.randomVerb2}</span>.`;
            break;
        case 1:
            result += `It was a <span style="color: red">${words.randomAdj1}</span> day, and I was <span style="color: red">${words.randomVerb1}</span> through the <span style="color: red">${words.randomAdj2}</span> streets of <span style="color: red">${words.randomNoun1}</span>. Suddenly, a <span style="color: red">${words.randomAdj3}</span> <span style="color: red">${words.randomNoun2}</span> appeared out of nowhere, holding a <span style="color: red">${words.randomCol1}</span> <span style="color: red">${words.randomNoun3}</span>. The <span style="color: red">${words.randomAdj4}</span> creature started to <span style="color: red">${words.randomVerb2}</span>, dropping the <span style="color: red">${words.randomCol2}</span> <span style="color: red">${words.randomNoun4}</span>. Curious, I picked it up and discovered <span style="color: red">${words.randomNum1}</span> strange symbols carved into it. Little did I know, this was the start of a <span style="color: red">${words.randomAdj5}</span> adventure that would change my life forever.`;
            break;
        case 2:
            result += `One <span style="color: red">${words.randomAdj1}</span> morning, I woke up to the sound of a <span style="color: red">${words.randomAdj2}</span> <span style="color: red">${words.randomNoun1}</span>. It was <span style="color: red">${words.randomVerb1}</span> outside, and the sky was <span style="color: red">${words.randomCol1}</span>. I decided to grab my <span style="color: red">${words.randomNoun2}</span> and head out for an adventure. After <span style="color: red">${words.randomNum1}</span> minutes of walking, I stumbled upon a <span style="color: red">${words.randomAdj3}</span> <span style="color: red">${words.randomNoun3}</span> that was <span style="color: red">${words.randomVerb2}</span> in the middle of the road. "This is the most <span style="color: red">${words.randomAdj4}</span> thing I've ever seen!" I exclaimed. The day ended with me <span style="color: red">${words.randomVerb3}</span> all the way home, dreaming of more <span style="color: red">${words.randomAdj5}</span> adventures to come.`;
            break;
        case 3:
            result += `One day, a <span style="color: red">${words.randomAdj1}</span> <span style="color: red">${words.randomNoun1}</span> decided to <span style="color: red">${words.randomVerb1}</span> through the <span style="color: red">${words.randomAdj2}</span> forest. The sky was a deep shade of <span style="color: red">${words.randomCol1}</span> and everything felt <span style="color: red">${words.randomAdj3}</span>. After walking for <span style="color: red">${words.randomNum1}</span> hours, the <span style="color: red">${words.randomNoun2}</span> found a <span style="color: red">${words.randomAdj4}</span> castle hidden among the trees. Inside, there was a <span style="color: red">${words.randomNoun3}</span> that started to <span style="color: red">${words.randomVerb2}</span> when it saw the visitor. 'I haven't seen anything so <span style="color: red">${words.randomAdj5}</span> in all my life!' it exclaimed. Feeling <span style="color: red">${words.randomAdj6}</span>, the <span style="color: red">${words.randomNoun4}</span> decided to <span style="color: red">${words.randomVerb3}</span> and head back home, dreaming of <span style="color: red">${words.randomNum2}</span> more adventures to come.`;
            break;
        case 4:
            result += `Long ago in a <span style="color: red">${words.randomAdj1}</span> kingdom, there lived a <span style="color: red">${words.randomAdj2}</span> <span style="color: red">${words.randomNoun1}</span>. One day, they decided to <span style="color: red">${words.randomVerb1}</span> to the legendary <span style="color: red">${words.randomCol1}</span> <span style="color: red">${words.randomNoun2}</span> hidden deep in the <span style="color: red">${words.randomAdj3}</span> forest. Armed with a <span style="color: red">${words.randomAdj4}</span> <span style="color: red">${words.randomNoun3}</span> and a map marked with <span style="color: red">${words.randomNum1}</span> mysterious symbols, the journey began. Along the way, they met a <span style="color: red">${words.randomAdj5}</span> traveler who offered to <span style="color: red">${words.randomVerb2}</span> with them. After many days of <span style="color: red">${words.randomVerb3}</span>-ing, they finally reached the <span style="color: red">${words.randomCol2}</span> <span style="color: red">${words.randomNoun4}</span>, only to discover it was guarded by a <span style="color: red">${words.randomAdj6}</span> <span style="color: red">${words.randomNoun5}</span>. To their surprise, the guardian wasn't hostile but instead asked for their help to <span style="color: red">${words.randomVerb4}</span>. Thus, a new adventure began, proving that even the most <span style="color: red">${words.randomAdj7}</span> quests can lead to unexpected friendships.`;
            break;
        case 5:
            result += `While <span style="color: red">${words.randomVerb1}</span>-ing in the <span style="color: red">${words.randomAdj1}</span> <span style="color: red">${words.randomNoun1}</span>, I stumbled upon a <span style="color: red">${words.randomCol1}</span> <span style="color: red">${words.randomNoun2}</span>. It looked <span style="color: red">${words.randomAdj2}</span> but smelled <span style="color: red">${words.randomAdj3}</span>. Curious, I decided to <span style="color: red">${words.randomVerb2}</span> it. To my surprise, it revealed <span style="color: red">${words.randomNum1}</span> <span style="color: red">${words.randomNoun3}</span>-s inside!`;
            break;
        case 6:
            result += `I hopped onto a <span style="color: red">${words.randomAdj1}</span> <span style="color: red">${words.randomNoun1}</span> and began <span style="color: red">${words.randomVerb1}</span>-ing through the <span style="color: red">${words.randomAdj2}</span> streets. Everything was <span style="color: red">${words.randomCol1}</span>, and I couldn't stop <span style="color: red">${words.randomVerb2}</span>-ing!`;
            break;
        case 7:
            result += `One <span style="color: red">${words.randomAdj1}</span> day, I found myself in a <span style="color: red">${words.randomAdj2}</span> <span style="color: red">${words.randomNoun1}</span>. It was filled with <span style="color: red">${words.randomCol1}</span> <span style="color: red">${words.randomNoun2}</span>-s, all <span style="color: red">${words.randomVerb1}</span>-ing. I decided to <span style="color: red">${words.randomVerb2}</span> my way out, but instead stumbled upon a <span style="color: red">${words.randomAdj3}</span> <span style="color: red">${words.randomNoun3}</span>. Now I’m stuck here for <span style="color: red">${words.randomNum1}</span> days!`;
            break;
        case 8:
            result += `In the <span style="color: red">${words.randomAdj1}</span> land of <span style="color: red">${words.randomNoun1}</span>, there was a prophecy about a <span style="color: red">${words.randomAdj2}</span> hero who would <span style="color: red">${words.randomVerb1}</span> their way through <span style="color: red">${words.randomNum1}</span> trials. Armed with only a <span style="color: red">${words.randomNoun2}</span>, they faced <span style="color: red">${words.randomAdj3}</span> <span style="color: red">${words.randomNoun3}</span>-s and the dreaded <span style="color: red">${words.randomAdj4}</span> guardian. In the end, they uncovered a <span style="color: red">${words.randomCol1}</span> treasure that had the power to <span style="color: red">${words.randomVerb2}</span> the entire kingdom.`;
            break;
        case 9:
            result += `I dreamt of a <span style="color: red">${words.randomCol1}</span> <span style="color: red">${words.randomNoun1}</span> that could <span style="color: red">${words.randomVerb1}</span>. It was <span style="color: red">${words.randomAdj1}</span> and made me feel <span style="color: red">${words.randomAdj2}</span>.`;
            break;
        case 10:
            result += `Once upon a time, a <span style="color: red">${words.randomAdj1}</span> <span style="color: red">${words.randomNoun1}</span> began their journey to find the fabled <span style="color: red">${words.randomCol1}</span> <span style="color: red">${words.randomNoun2}</span>. Their path led them through a <span style="color: red">${words.randomAdj2}</span> forest where they encountered a <span style="color: red">${words.randomAdj3}</span> <span style="color: red">${words.randomNoun3}</span> that tried to <span style="color: red">${words.randomVerb1}</span> them. Undeterred, they used a <span style="color: red">${words.randomNoun4}</span> to escape and found a map marked with <span style="color: red">${words.randomNum1}</span> locations. Each step brought new challenges, from <span style="color: red">${words.randomVerb2}</span>-ing across rivers to battling <span style="color: red">${words.randomAdj4}</span> <span style="color: red">${words.randomNoun5}</span>-s. At the end of their journey, they realized the true treasure wasn’t the <span style="color: red">${words.randomCol2}</span> <span style="color: red">${words.randomNoun6}</span>, but the <span style="color: red">${words.randomAdj5}</span> friends they made along the way.`;
        break;
        }
    console.log(storyNum)
    return result;
}




// inputs the output of madLib() into the div app or if for some reason it isn's working, gives a tip
// Also has a varible refresh and if then statements to display an error code if it cannot get the madlib after 2 refreshes
function displayMadlib() {
    const madLibApp = document.getElementById('madLib');
    const refresh = 0;
    if (madLibApp) {
        const newRandomWordSet = randomWords(adjectives, verbs, nouns, numbers, colors);
        madLibApp.innerHTML = madLib(newRandomWordSet);
    } else {
        madLibApp.innerHTML = `<p>No Mad-Libs Generated, Try Refreshing!</p>`;
        refresh += 1;
        if (refresh == 2) {
            madLibApp.innerHTML = `<p>Still no luck? Try contacting the maintainer.</p>`;
        }
    }
}


document.addEventListener('DOMContentLoaded', displayMadlib);
