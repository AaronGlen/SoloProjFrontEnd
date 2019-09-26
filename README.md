# Heroes and Teams application 

In fulfilment of the solo project assignment due friday week 8 at QA consulting.

## Index
[Brief](#brief)
   * [Solution](#solution)
   
[Architecture](#architecture)
   * [Entity Relationship Diagrams](#erd)
	
[Testing](#testing)
 
     
[Deployment](#depl)
   * [Technologies Used](#tech)
     
[Front End Design](#FE)

[Improvements for the Future](#improve)

[Authors](#auth)

[Acknowledgements](#ack)

<a name="brief"></a>
## The Brief

The brief was to create an object-oriented web application that covers all the core topics and utilizes the various tools covered at the Academy in the last 8 weeks.

<a name="solution"></a>
### Solution

My project consisted of making a website where users can create/delete heroes/teams from comic books with the attributes of the 1st issue and a description of the hero/team. Each attribute of the heroes/teams can be edited. Users are also able to
search for heroes/teams by name.

<a name="architecture"></a>
## Architecture
<a name="erd"></a>
### Entity Relationship Diagrams
#### Initial plan
![Initial ERD](/images/initialERD.jpg)

The ERD above is my initial diagram for my project, the sections a colour coded based on what I thought was most important to accomplish in my project. In my final application, I managed to deliver two tables that did not communicate with each other.


#### Delivered solution
![Final ERD](/images/finalERD.jpg)

As shown above, I decided to remove a few attributes from both tables so that I could focus on the functionality of my final delivered project.
<a name="testing"></a>
## Testing

I tested my project by using Mockito tests for the API and Selenium tests for the front end.

Test coverage for the backend is at 97% as shown [here](/images/coverage97.jpg)

Below are links to my codacy reviews, my Api repository and my selenium testing repository. 
*   [Codacy Dashboard for API Review](https://app.codacy.com/manual/AaronGlen/SoloProjSpringApp/dashboard)

*   [Codacy Dashboard for Front End Review](https://app.codacy.com/manual/AaronGlen/SoloProjFrontEnd/dashboard)

*   [Github repository for API](https://github.com/AaronGlen/SoloProjSpringApp/tree/master)

*   [Github repository for Selenium Tests](https://github.com/AaronGlen/SeleniumTestsSoloProj)
<a name="depl"></a>
## Deployment

The building, testing, and deployment process was automated using Jenkins, where Jenkins would copy the needed repositories every hour to an external directory to be then hosted by apache2. The API is run by maven on a virtual machine via GCP (Google cloud PLATFORM).
[Jenkins Conifg](images/jenkins.jpg).


The API and front end were first tested locally before being pushed up online, postman API call requests were first used locally before the API calls were implemented into Java script.



![Deployment Pipeline](/images/ciPipeLine.jpeg)
<a name="tech"></a>
### Technologies Used

*   MySQL Database Engine - Database
*   Java - API Logic
*   JavaScript - Front End Logic
*   Draw.io - Wireframes and ERDs
*   HTML, CSS, Bootstrap Studio - Front End Design
*   Postman - API call tests
*   Apache2 - Deployment
*   Jenkins - CI Server
*   Maven - Dependency Management
*   [Git](https://github.com/AaronGlen/SoloProjFrontEnd.git) - VCS
*   [Trello](https://trello.com/b/pVnNall5/hero-team) - Project Tracking
*   GCP - Live Environment


<a name="FE"></a>
## Front End Design
### Wireframes
Hero page

![Hero Wireframe](/images/heroTable.jpg)

Team page

![Team Wireframe](/images/teamTable.jpg)

### Final Look
Hero page

![Hero page](/images/endHeroTable.jpg)

Hero update

![Hero update](/images/endUpdateHero.jpg)

Team page

![Team page](/images/endTeamTable.jpg)

Team Update

![Team create](/images/endCreateTeam.jpg)

<a name="improve"></a>
## Improvements for the Future

Currently, the hero and teams tables do not communicate with each other, in my next sprint I would like to set up a one to many relationship between the tables, so users can create teams with the heroes on the database. In future sprints id like the hero/team attributes to be pre-loaded into the input box's when updating a hero/team entry, so that a user can update a hero/team entry without writing in all the attributes again.

In later Sprints, I would like to create a story arcs table that would have a many to many relationship with heroes and teams, so that users can find stories featuring their favorite heroes and teams. 




<a name="auth"></a>
## Authors

Aaron Glendinning

<a name="ack"></a>
## Acknowledgements

* QA consulting and our brilliant instructors
* My fellow CEO's at Annoymous and Co and the rest of our wonderful cohort on the programme



