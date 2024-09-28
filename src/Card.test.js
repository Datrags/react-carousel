import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

let testCard = <Card 
    caption="testing Caption" 
    src="https://i.imgur.com/h1pzaFN.jpeg" 
    currNum={1}
    totalNum={3}
/>
it("should render without crashing", () => {
    render(testCard);
    
});

it("should compare with snapshot", () =>{
    const {asFragment} = render(testCard);
    expect(asFragment()).toMatchSnapshot();
});