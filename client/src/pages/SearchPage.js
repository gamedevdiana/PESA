import React, { Component } from "react";

import { Container, Row, Col } from "../components/Grid";

import Logo from "../components/Logo";

import SearchForm from "../components/SearchForm"

import SearchResult from "../components/SearchResult"
import FormFill from "../components/FormFill"
import logoImage from "../images.json";
import API from "../utils/API";
import { JobCard } from './jobCard';
import { SearchStyles } from '../styles/searchStyles';
import { SearchFilter } from './searchFilter';

import "../components/SearchResult/search.css";


class SearchPage extends Component {
    state = {

        search: "",
        company: "",
        location: "",
        position: "",
        description: "",
        date: "",
        documents: "",
        results: [],
        job: {
            title: '',
            description: '',
            companyName: '',
            location: ''
        }
    }


    handleInputChange = event => {

        const { name, value } = event.target;

        this.setState({
            [name]: value
        })

    };

    handleFormSubmit = event => {
        event.preventDefault();


        console.log(this);

        API.saveJob({
            company_name: this.state.company,
            location: this.state.location,
            position: this.state.position,
            description: this.state.description,
            application_date: this.state.date,
            documents: this.state.documents

        })
            .then(res => {

                this.setState({
                    search: "",
                    company: "",
                    location: "",
                    position: "",
                    description: "",
                    date: "",
                    documents: "",
                })



            })
            .catch(err => console.log(err));

    }



    render() {
        return (


            <div>
                <div className="d-flex justify-content-between border-bottom ml-2 mr-2">
                    <div id="search">
                        <div id="picture2">
                            <Row>

                                <Col size="md-2">
                                    <div id="picture2">
                                        <Logo image={logoImage[0].image} name={logoImage[0].name} />
                                    </div>

                                </Col>
                            </Row>
                            <Row className="ml-5">
                                <Col size="md-12">
                                    <SearchFilter />
                                    {/* <SearchForm
                                        search={this.state.search}
                                        // location={this.state.location}
                                        onChange={this.handleInputChange}
                                        onClick={this.handleFormSubmit}
                                    /> */}

                                </Col>


                            </Row>
                        </div>



                        <div className="ml-5">
                            <FormFill
                                company={this.state.company}
                                location={this.state.location}
                                position={this.state.position}
                                description={this.state.description}
                                date={this.state.date}
                                documents={this.state.documents}
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}
                            />

                        </div>
                    </div>

                </div>
            </div>
        )


                /* </div> 

            <div>
                <div className="d-flex justify-content-between border-bottom ml-2 mr-2">
                    <Row>
                        <Col size="md-2">
                            <Logo image={logoImage[0].image} name={logoImage[0].name} />
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            <SearchForm
                                search={this.state.search}
                                // location={this.state.location}
                                onChange={this.handleInputChange}
                                onClick={this.handleFormSubmit}
                            />

                        </Col>
                        <Row className="ml-5">
                            <JobCard
                                job={this.state.job}
                            />
                        </Row>


                    </Row>
                </div>

            </div> */


            }
        
        
        }
        
export default SearchPage;