import React, { useState } from "react";
import "./Dashboard.css";
import CalculatorGuide from "../Components/Guideline";
import "react-calendar/dist/Calendar.css";
import dbjson from '../db.json'
import BasicCalculator from "../Components/BasicCalculator";
import BMI from "../Components/BMI";
import BMR from "../Components/BMR";
import Tax from "../Components/Tax";
import Budget from "../Components/Budget";
import Instalment from "../Components/Instalment";
import Unit from "../Components/Unit";
import Currency from "../Components/Currency";
import Grades from "../Components/Grades";


function Dashboard() {
    const [sections] = useState(dbjson.sections);
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
    const [selectedSection, setSelectedSection] = useState();
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString();

    return (
        <div className="dashboard-container">
            <div className={`sidebar ${isSidebarExpanded ? "expanded" : "collapsed"}`}>
                <div className="header">
                    <h2 className="app-title" style={{ fontFamily: 'Tahoma, sans-serif',cursor:'pointer' }} onClick={() => setSelectedSection("")}>InnovAyd Calculators</h2>
                </div>
                <button
                    className="toggle-sidebar-btn"
                    onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
                >
                    {isSidebarExpanded ? "<<" : ">>"}
                </button>
                <ul className="sidebar-list">
                    {sections.map((section) => (
                        <li
                            key={section.id}
                            onClick={() => setSelectedSection(section.name)}
                            className={`sidebar-item ${selectedSection === section.name ? "active" : ""}`}
                        >
                            <span className="sidebar-icon">{section.icon}</span>
                            {isSidebarExpanded && <span>{section.name}</span>}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="main-content">
                {selectedSection ? (
                    <>
                        <h1 className="section-title">{selectedSection}</h1>
                        <h2 className="current-date">{formattedDate}</h2>
                        <div className="section-content">
                            {selectedSection === "Basic Calculator" && (<BasicCalculator/>)}
                            {selectedSection === "BMI Calculator" && (<BMI/>)}
                            {selectedSection === "BMR Calculator" && (<BMR/>)}
                            {selectedSection === "Tax Calculator" && (<Tax/>)}
                            {selectedSection === "Budget Calculator" && (<Budget/>)}
                            {selectedSection === "Instalment Calculator" && (<Instalment/>)}
                            {selectedSection === "Distance Unit Conversion Calculator" && (<Unit/>)}
                            {selectedSection === "Currency Conversion Calculator" && (<Currency/>)}
                            {selectedSection === "Grade Calculator" && (<Grades/>)}
                        </div>
                    </>
                ) : (
                    <CalculatorGuide/>
                    )}
            </div>
        </div >
    );
}

export default Dashboard;
