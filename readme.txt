--Readme document for [Angela Duran, Hayder Al-Najjar], angeladd@uci.edu hhalnajj@uci.edu, [47301060, 67882437]--

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

20/20
- 3/3 The ability to log overnight sleep
- 3/3 The ability to log sleepiness during the day
- 3/3 The ability to view these two categories of logged data
- 3/3 Either using a native device resource or backing up logged data
- 3/3 Following good principles of mobile design
- 3/3 Creating a compelling app
- 2/2 A readme and demo video which explains how these features were implemented and their design rationale

2. How long, in hours, did it take you to complete this assignment?
About 4-5 days for the both of us


3. What online resources did you consult when completing this assignment? (list specific URLs)
We read lot's of documentation: 
firebase: https://firebase.google.com/docs
angular: https://angular.io/guide/inputs-outputs
ionic UI components: https://ionicframework.com/docs/components 


4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
Angela and Hassan worked together to create this project. We discussed the design and how we wanted it to work.


5. Is there anything special we need to know in order to run your code?

In order to run, cd into sleep-wars folder and enter: 
    npx ionic serve // or if on PC just ionic serve

We weren't sure if this was necessary, but we included a requirements.txt file at the top directory 
that shows what npm installations we did to have our project work.

When viewing our app we ask you to go to developer mode and select an iOS device for the intended and best viewing experience.


--Aim for no more than two sentences for each of the following questions.--


6. Did you design your app with a particular type of user in mind? If so, whom?
We wanted to make a convenient iOS application that was simple and quick to use. Our UI replicates a lot of familiar iPhone designs.


7. Did you design your app specifically for iOS or Android, or both?

We tried to go for an iOS type of design for our UI.

8. How can a person log overnight sleep in your app? Why did you choose to support logging overnight sleep in this way?

On our record tab view, user is first prompted to specify what time they went to bed and what time they woke up. Our
app then calculates in hours how long the user slept, automating that process.


9. How can a person log sleepiness during the day in your app? Why did you choose to support logging sleepiness in this way?

After inputting sleep data, the user is asked a follow up question to rate how tired they are and tapping one of our graphical scaling icons (1-8).
We decided to bump up to 8 instead of 7 for symmetry reasons, we hope you will allow this.

10. How can a person view the data they logged in your app? Why did you choose to support viewing logged data in this way?

We have a tab on the bottom that says "Analyze" where the user may view a line graph of their recorded data over the last 7 days. 
For days the user has not recorded, the default display will show 0 for both sleep hours and sleep level.


11. Which feature choose--using a native device resource, backing up logged data, or both?
We chose to do the backend in Firebase. However, app is also structured to work on iOS device.


12. If you used a native device resource, what feature did you add? How does this feature change the app's experience for a user?



13. If you backed up logged data, where does it back up to?
Firebase!

14. How does your app implement or follow principles of good mobile design?
We really wanted to focus on simplistic design that is easy to navigate and understand. It also deals with different screen sizes and accounts for mistakes by allowing users
to delete or modify their data.
