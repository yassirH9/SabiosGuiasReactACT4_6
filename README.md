<div id="top"></div>

  <h3 align="center">Sabios Guías Interpretes</h3>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Proyect content</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li>
          <a href="#main-menu">Main Menu</a>
          <ul>
            <li><a href="#header">Header</a></li>
            <li><a href="#slider">Slider</a></li>
            <li><a href="#discover-zone">Discover Zone</a></li>
            <li><a href="#video">Video</a></li>
            <li><a href="#route-cards">route Cards</a></li>
            <li><a href="#footer">Footer</a></li>
          </ul>
        </li>
      </ul>
    </li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
Web project made with JavaScript, React HTML and SASS, raised as a practice to make a main page of a web of tourist and cultural routes in the Canary Islands.

Along with a 360 route map, with a VR lobby.

### Built With

* [React.js](https://reactjs.org/)
* [Bootstrap](https://getbootstrap.com)
* [JavaScript](https://www.javascript.com/)
* [SASS](https://sass-lang.com/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

follow the instructions below to use clone the project
* GIT

  ```sh
  git clone https://github.com/yassirH9/SabiosGuiasReactACT4_6
  ```

### Installation

_Follow the instructions below to use this the project._

1. Go to proyect folder

   ```sh
   cd SabiosGuiasReactACT4_6
   ```
   
2. Install NPM packages

   ```sh
   npm install
   ```
   
3. Open a local web service on 'localhost:3000'

   ```js
   npm start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

This project is intended to be an example of react framework practice.

<!--  -->
### Main menu

#### Header

While being in the main menu of our webpage, we can see the header in the corporate color of the SGI, followed by their logo and a responsive menu that leads us to different pages. In case of using a mobile phone, said menu will collapse and convert into a burger menu that opens into an offcanvas, containing the same links as the desktop version.


#### Slider

Following the header we have a simple slider displaying some pictures that encourages the viewer to see more!


#### Discover zone

After the slider section we're presented to the "Sabios Guías" project, showing its interests and purposes, in combination to their vows in a three-column style that combines in such a way with the rest of the main page.


#### Video

Just in case the last section wasn't clear enough, there's an embedded video avaiable just a click away.


#### Route Cards

Having enough with the presentations, the route cards present a quick image and a little bit of information referring to each route along with a button that invites the user to see more, guiding them to the VR lobby mentioned earlier.

#### Footer

Last but not least we have the footer, containing a "Featured links" section with SGI's official social medias like: 

* [YouTube](https://www.youtube.com/channel/UCsXpM6GoxhFjlGDTyEZ4q8A)
* [Facebok](https://www.facebook.com/fundacionlidiagarcia/posts/sabios-gu%C3%ADas-interpretes-en-agaete-hoy-el-equipo-t%C3%A9cnico-del-proyecto-sabios-gu%C3%AD/877161022843884/)
* [Twitter](https://twitter.com/FundacionLidia)

And it even offers a RSS button in case you don't want to miss anything related to this page.


<p align="right">(<a href="#top">back to top</a>)</p>


### VR

Probably the section where most people will stay, in the VR page we've got a large lobby in which we have two main walls, one at each side showing a little preview of what we can find if we point directly at them.

We can also notice the presence of the control panel in front of us, a floating panel that provides us with some buttons to control the different parts of this ride. It contains four buttons:

* Home
* Play
* Pause
* Main Page


When navigating through the different videos, we can resort to them to facilitate our visit, for example, in case we wanted to get back to the main page because we're done and want to contact SGI to join their lines, we have the SGI logo acting as a button that guides us to said main page.

Albeit the control panel may look a little bit dry or lack of content, it can make the deal for sure!

Last advice, the buttons are actioned using eventListeners along with mouseenter interactions, that means that the button is activated by just positioning the cursor onto said button.
The cursor it's in the middle of the screen and makes a distinctive animation each time it touches a button.


  ```js
  addEventListener("mouseenter", function (){});
  ```


This is a quick example of a basic eventListener, where we await for an object with the quality "mouseenter" to collide with the button. In this case, the cursor lines a trace in front of it that has the "mouseenter" quality and triggers every button it collides with.


<p align="right">(<a href="#top">back to top</a>)</p>

[Link Hosting](https://lndsabiosguias.web.app/)

