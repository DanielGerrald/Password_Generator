# Password_Generator
Description
In this project I will create a responsive web page that prompts the generates a random password. When the generate button is clicked the user will be prompted to select a number between and including 8 - 128. If the user selects cancel then the process will end. If the user enters anything other than a number that is between 8 and 128 including 8 and 128 then they will be prompted to try again.

The user will then be prompted to confirm if they would like to include numbers in their password by selecting ok. If they select cancel then numbers will not be used.
This process will prompt again to confirm special character as well as uppercase letters and lowercase letters.

If a user selects cancel for all four of these prompts then the user will be prompted that they must select at least one option and to try again.

The java script code will then combine the arrays of numbers, special character, uppercase letters and lowercase letters dependent uppon the users confirmations from the previous prompts. 

Then a random element will be selected from the combined array the number of times the user input from the first prompt and added to a variable. 

This variable will then be output in the text box for the user to see.