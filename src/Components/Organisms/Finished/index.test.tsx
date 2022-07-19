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
  

//   jest.mock("axios");
//   const mockedAxios = axios as jest.Mocked<typeof axios>
//   describe("finished", () => {
//     describe("when API call is successful", () => {
//       it("should return books list", async () => {
//         // given
//         const allBooks = [ 
//             {
//                 "id": 3,
//                 "author": "Trey Gowdy",
//                 "country": "Achaemenid Empire",
//                 "imageLink": "3.svg",
//                 "language": "Hebrew",
//                 "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
//                 "pages": 176,
//                 "title": "Doesn’t Hurt to Ask",
//                 "year": -600,
//                 "readTime": "13",
//                 "readersCount": "1.9k",
//                 "status": "finished",
//                 "category": "featured"
//               },
//               {
//                 "id": 4,
//                 "author": "Amanda Little",
//                 "country": "Sumer and Akkadian Empire",
//                 "imageLink": "4.svg",
//                 "language": "Akkadian",
//                 "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
//                 "pages": 160,
//                 "title": "The Fate of Food",
//                 "year": 1970,
//                 "readTime": "12",
//                 "readersCount": "16k",
//                 "status": "reading",
//                 "category": "trendingBlinks"
//               },]
//               const id =3;
//         mockedAxios.get.mockResolvedValueOnce(allBooks[0]);
        
//         // when
//         const result = Finished({id});
  
//         // then
//         expect(mockedAxios.get).toHaveBeenCalledWith(`http://localhost:3000/dataBase/${id}`);
//         expect(result).toEqual(allBooks[0]);
//       });
//     });

//   })










//   const axios = require('axios')
//   jest.mock('axios') //<<<------
  
// //   test('should mock axios', async () => {
// //     // const funt = screen.getAllByText('addToFinished')
// //     // expect(funt).toBeInTheDocument();
// //     const resp = {data: {moreData: 'zedata'}}
// //     axios.get.mockResolvedValue(resp)
// //     // const actualresp = await BookDetailOrganism()
// //     // expect(actualresp).toEqual({moreData: 'zedata'})
// //   })

//   const mockedAxios = axios as jest.Mocked<typeof axios>
//   jest.mock('axios');
//     describe("when API call is successful", () => {
//       it("should return users list", async () => {
//         // given

//         const allBooks = [ 
//             {
//               "id": 1,
//               "author": "Erica Keswin",
//               "country": "Italy",
//               "imageLink": "1.png",
//               "language": "Italian",
//               "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
//               "pages": 928,
//               "title": "Bring Your Human to Work",
//               "year": 1315,
//               "readTime": "15",
//               "readersCount": "1.9k",
//               "status": "reading",
//               "category":"featured"
//             },
//             {
//               "id": 4,
//               "author": "Amanda Little",
//               "country": "Sumer and Akkadian Empire",
//               "imageLink": "4.svg",
//               "language": "Akkadian",
//               "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
//               "pages": 160,
//               "title": "The Fate of Food",
//               "year": 1970,
//               "readTime": "12",
//               "readersCount": "16k",
//               "status": "reading",
//               "category":"trendingBlinks"
//             },]
//             const onClick= jest.fn();
//             const {getByTestId}=render(<BookDetailOrganism id={1}></BookDetailOrganism>)  
           
//            mockedAxios.get.mockResolvedValueOnce({data:allBooks});
  
//         // when
//         //  const result = await myModuleThatCallsAxios.makeGetRequest();
  
//         // then
//         // eslint-disable-next-line testing-library/prefer-screen-queries
//         fireEvent.click(getByTestId('Banner'));
//        expect(onClick).toHaveBeenCalled();
                          

//        expect(mockedAxios.get).toHaveBeenCalled();
//         expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/dataBase");
//         // expect(result).toEqual(allBooks);
//       });
//     });