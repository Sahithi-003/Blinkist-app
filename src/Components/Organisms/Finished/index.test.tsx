import { fireEvent, render, screen } from '@testing-library/react';
import Finished from './index';
import { BrowserRouter } from 'react-router-dom';
import axios from "axios"

const renderFunction = () => {
    render(
      <BrowserRouter>
        <Finished id={1}          
        ></Finished>
      </BrowserRouter>,
    );
  };

it('should have finished button', () => {
    renderFunction();
    const Finished = screen.getByRole('button', { name: /Finished/i });
    expect(Finished).toBeInTheDocument();
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
<Finished id={1}          
></Finished>
</BrowserRouter>
)

}
const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock("axios");
describe("Book Data",()=>{
test("should render book",async()=>{
mockedAxios.get.mockResolvedValue(Promise.resolve(response))
mockedAxios.post.mockResolvedValue(Promise.resolve(response))
axios.get = jest.fn().mockResolvedValue(Promise.resolve(response));
render(<MockBook/>);
const bookId=await screen.findByText(/Finished/i)
expect(bookId).toBeInTheDocument()

// expect(mockedAxios.get.mockResolvedValue(Promise.resolve(response))).toBeCalledTimes(1)
expect(mockedAxios.post.mockResolvedValue(Promise.resolve(response))).toBeCalledTimes(0)

});
})
it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';

    mockedAxios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );
  });
  

let Id =3
describe("Book Finished",()=>{
test("should render book",async()=>{
mockedAxios.get.mockResolvedValue(Promise.resolve(response))
mockedAxios.post.mockResolvedValue(Promise.resolve(response))
render(<MockBook/>);
const bookId=await screen.findByText(/Finished/i)
expect(bookId).toBeInTheDocument()
fireEvent.click(bookId)
})
})

