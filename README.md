# Heroes and Teams application 

In fulfilment of the solo project assignment due Monday week 7 at QA consulting.

## Index
[Brief](#brief)
   * [Solution](#solution)
   
[Architecture](#architecture)
   * [Entity Relationship Diagrams](#erd)
	
[Testing](#testing)
   * [Report](#report)

     
[Deployment](#depl)
   * [Technologies Used](#tech)
     
[Front End Design](#FE)

[Improvements for the Future](#improve)

[Authors](#auth)

[Acknowledgements](#ack)

<a name="brief"></a>
## The Brief

The brief was to create an object oriented web application that covers all the core topics and utilises the various tools covered at the Academy in the last 8 weeks.

<a name="solution"></a>
### Solution

My project consisted of making a website where users are able create/delete heroes/teams from comic books with the 
attributes of 1st issue and a description of the hero/team. Each attribute of the heroes/teams can be edited. Users are also able to
search for heroes/teams by name.

<a name="architecture"></a>
## Architecture
<a name="erd"></a>
### Entity Relationship Diagrams
#### Initial plan
![Initial ERD](/images/initialERD.jpg)

The ERD above 

#### Delivered solution
![Final ERD](/images/finalERD.jpg)

The ERD above is the final two tables 

<a name="depl"></a>
## Deployment

The building, testing and deployment process was automated using Jenkins, where jenkins would copy the needed repositroys every hour to an external directory to be then hosted by apache2. The API is ran by maven on a virtual machine via GCP (Google cloud PLATFORM).
[Jenkins Conifg](images/jenkins.jpg).

The API and front end where first tested locally before being pushed up online, postman API call requests were first used locally before the API calls were implemented into Java script.



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

Currently the hero and teams tables do not communicate with each other, in my next sprint I would like to set up a one to many relation ship between the tables, so users are able to create teams with the heros on the database. In future sprints id like the hero/team attributes to be pre loaded into the input box's when updating a hero/team entry, so that a user can update a hero/team entry without writing in all the attributes again.

In later Sprints i would like to create a story arcs table that would have a many to many relationship with heroes and teams, so that users are able to find stories featureing their favoriote heroes and teams. 




<a name="auth"></a>
## Authors

Aaron Glendinning

<a name="ack"></a>
## Acknowledgements

* QA consulting and our okay instructors
* The rest of our decent cohort on the programme



