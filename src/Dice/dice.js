// const [numbers, setNumbers] = useState([null, null, null, null, null])


import React from 'react';
//const MyComponent = () => {: Declare a functional component called reactdice.
const DiceBox = () => {


    //const [numbers, setNumbers] = React.useState([]);: Use the useState hook to create a state variable numbers and its corresponding updater function setNumbers. The initial value of numbers is an empty array.
const [numbers, setNumbers] = React.useState([]);
    





//const getRandomNumber = () => {: Define a function getRandomNumber that generates a random number between 1 and 6 (inclusive) using Math.random() and Math.floor().
const getRandomNumber = () => {
        return  Math.floor(Math.random() * 6 ) + 1;
        

    };
    
    //if (count === 5) { return; }: The function checks if the count is equal to 5. If it is, the function returns, terminating the recursion.
    
    const generateRandomNumbers = (count) => {
        if (count === 5) {
          return;
        }



        //const randomNum = getRandomNumber();: Generate a random number using the getRandomNumber function.
        const randomNum = getRandomNumber();

///setNumbers((prevNumbers) => [...prevNumbers, randomNum]);: Update the numbers state using the updater function setNumbers. The spread operator ... is used to create a new array that includes all the elements from the previous numbers array (prevNumbers) along with the new randomNum.
        setNumbers((prevNumbers) => [...prevNumbers, randomNum]);
        generateRandomNumbers(count + 1);
      };


      //const handleClick = () => {: Define the handleClick function, which will be called when the "Generate Random Numbers" button is clicked.
const handleClick = () => {

    //setNumbers([]);: Before generating new random numbers, the numbers state is cleared by setting it to an empty array. This ensures that the new random numbers will replace the previous ones.
   setNumbers([]);// Clear previous numbers before generating new ones

   //generateRandomNumbers(0);: Call the generateRandomNumbers function with an initial count of 0 to start generating 5 random numbers.
   generateRandomNumbers(0);
};
//An unordered list (ul) is rendered to display the generated random numbers. The numbers state is mapped using the map function to create list items (li) for each random number.

// Each list item has a unique key attribute set to the index to help React efficiently update the list when new random numbers are generated.

// The num variable in the map function represents the value of the random number, which is displayed inside each list item.
  
return (
    <div>
        <button onClick={handleClick}> Generate Random Number</button>
        <ul>
            {numbers.map((num, index) => (
                <li key={index}>{num}</li>
            ))}
        </ul>
    </div>
)
  };


  export default DiceBox;