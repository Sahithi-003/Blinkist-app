import { fireEvent, render, renderHook, screen} from '@testing-library/react';

import ReadAgain from './index';
import { BrowserRouter } from 'react-router-dom';
import axios from "axios"
import "@testing-library/jest-dom"
import { act } from 'react-dom/test-utils';
const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock("axios");
const renderFunction = () => {
    render(
      <BrowserRouter>
        <ReadAgain id={1}          
        ></ReadAgain>
      </BrowserRouter>,
    );
  };

it('should have finished button', () => {
    renderFunction();
    const ReadAgain = screen.getByRole('button', { name: /Read Again/i });
    expect(ReadAgain).toBeInTheDocument();
  });
  
  const data = 
                {
                    "id": 3,
                    "author": "Trey Gowdy",
                    "country": "Achaemenid Empire",
                    "imageLink": "3.svg",
                    "language": "Hebrew",
                    "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
                    "pages": 176,
                    "title": "Doesn’t Hurt to Ask",
                    "year": -600,
                    "readTime": "13",
                    "readersCount": "1.9k",
                    "status": "finished",
                    "category": "featured"
                  };

const response={data:data};
const MockBook = () =>{
    return(
        <BrowserRouter>
        <ReadAgain id={1}          
        ></ReadAgain>
      </BrowserRouter>
    )
    
}
let Id =3
describe("Book Data",()=>{
    test("should render book",async()=>{
        mockedAxios.get.mockResolvedValue(Promise.resolve(response))
        mockedAxios.post.mockResolvedValue(Promise.resolve(response))
        render(<MockBook/>);
        const bookId=await screen.findByText(/Read Again/i)
        expect(bookId).toBeInTheDocument()
        fireEvent.click(bookId)
    })
})

