# PasswordGenerator_Javascript

# This project is to write a javascript to generate a random set of password folloing the user's input and specification.

# Following are the logical steps of writing the java script:

## create the generatePassword function
## prompts of questions for user to collect password quateria:

    1. create prompt ask for lengh of password range 8<password<128, save the result to a var. If not between 8 and 128, loop back to alert to remind user requirements and request another input. Create a var for user's character number preference.
    2. use "confirm" for true/ false value for     
              confirm:upper case ?
              confirm:lower case?
              confirm:numeric?
              confirm:special characters?

    3: for each confirm values. One must be selected if all false loop back to alert for make at least one selection

    4: after step 1-3. Generate password.
             Create array for:
             #lower case 
             #upper case
             #number
             #special characters

    5: Create a Var that contains the users preferences to provide input for password generator

    6: Use var: user's prefer character number users specifyed length of password form randonly generated password use math.floor" "math.random" to generate random numbers

by Shunpin Tseng (shunpin@gmail.com)
time: 2020/09/11 8:10pm (Pacifit Time)