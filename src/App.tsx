import React from "react";
import "./App.css";
import image from "./banana.webp";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Caleb Sachetti Hello
                World
            </header>
            <h1>this is my new header</h1>
            <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.smithsonianmag.com%2Fscience-nature%2Fbuilding-a-better-banana-70543194%2F&psig=AOvVaw1Gc-xEpNs9ExR-0ORsELub&ust=1694278899416000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCNCd5fG-m4EDFQAAAAAdAAAAABAF"
                alt="A picture of a banana"
            />
            <ul>
                <li>valorant</li>
                <li>overwatch</li>
                <li>siege</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        Hello I am the first column <div id="rectangle"></div>
                    </Col>
                    <Col>
                        Hello I am the second column <div id="rectangle"></div>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
