import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import PhotographyPage from "./components/photography";
import EngagementPage from "./components/portfolio-components/engagement-page";
import BabyShowerPage from "./components/portfolio-components/babyShower-page";
import PotraitsPage from "./components/portfolio-components/potraits-page";
import WeddingPage from "./components/portfolio-components/wedding-page";
import MaternityPage from "./components/portfolio-components/maternity-page";
import EventsPage from "./components/portfolio-components/events-page";
import FamilyPage from "./components/portfolio-components/family-page";
import KidsPage from "./components/portfolio-components/kids-page";
import GraduationPage from "./components/portfolio-components/graduation-page";
import TeamPage from "./components/portfolio-components/team-page";
import VideoPage from "./components/portfolio-components/video-page";
import ServicePage from "./components/services-page";
import Contact from "./components/contact";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

class Root extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/photography" component={PhotographyPage} />
          <Route path="/engagement" exact component={EngagementPage} />
          <Route path="/babyshower" component={BabyShowerPage} />
          <Route path="/potraits" component={PotraitsPage} />
          <Route path="/wedding" component={WeddingPage} />
          <Route path="/maternity" component={MaternityPage} />
          <Route path="/events" component={EventsPage} />
          <Route path="/family" component={FamilyPage} />
          <Route path="/kids" component={KidsPage} />
          <Route path="/graduation" component={GraduationPage} />
          <Route path="/our-team" component={TeamPage} />
          <Route path="/videography" component={VideoPage} />
          <Route path="/services" component={ServicePage} />
          <Route path="/contact" component={Contact} />
          <Redirect from="*" to="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default Root;

root.render(<Root />);
