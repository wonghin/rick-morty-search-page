import axios from "axios";
import React, { useEffect, useState } from "react";
import { ContactBox } from "../../component/ContactBox";
import { CharactersData, Result } from "../../data/CharactersData";
import { CharacterDetailsData } from "../../data/CharactersDataDetails";
import { EpisodeData } from "../../data/EpisodeData";

import getCharactersData, { getAllCharactersData } from "../../resource/CharactersDataResource";
import "./style.css";
import mockData from "./MockData.json";
import { ContactDetailsPage } from "../ContactDetailsPage";
import { useNavigate } from "react-router-dom";
import { Spinner1 } from "../../component/Spinner";
import { Button, Form, Pagination } from "react-bootstrap";
import { Scrollbars } from 'react-custom-scrollbars-2';

export const ContactPage = () => {
  const [charactersData, setCharactersData] = useState<
    CharactersData | undefined | null
  >(undefined);
  const [page, setPage] = useState<number>(1);

  const [allCharactersListData, setAllCharactersListData] = useState<CharacterDetailsData[] | undefined | null>(undefined);


  //forceUpdate
  const [forceUpdate, setForceUpdate] = useState<number>(0);
  const navigate = useNavigate();


  useEffect(() => {
    let isMount = true;
    if (isMount) {
      getCharactersData(page, onLoadcharactersData);
    }

    return () => { isMount = false };
  }, [page]);

  useEffect(() => {
    //need change that not hard code
    let temp: number[] = [];
    for (let i = 1; i < 827; i++) {
      temp.push(i);
    }
    getAllCharactersData(temp, onLoadAllcharactersListData);
  }, [])



  const onLoadcharactersData = (status: number, data?: CharactersData) => {
    if (status === 200) {
      setCharactersData(data);
    }
  };

  const onLoadAllcharactersListData = (status: number, data?: CharacterDetailsData[]) => {
    if (status === 200) {
      setAllCharactersListData(data)
    }

  };

  //navigate pages//////////////////////////////////////////////
  const onCharactersDetails = (value: Result) => {
    setForceUpdate(forceUpdate + 1);

    navigate(`/contact/${value.id}`);
    window.scrollTo(0, 0);
  };

  const onSearchCharactersDetails = (value: CharacterDetailsData) => {
    setForceUpdate(forceUpdate + 1);
    navigate(`/contact/${value.id}`);
    window.scrollTo(0, 0);
  };

  const onContactPage = () => {
    navigate(`/contact`);
    window.scrollTo(0, 0);
  }

  const onTestPage = () => {
    navigate('/Test');
    window.scrollTo(0, 0);
  }
  ///////////////////////////////////////////////////////////////


  //Pagination//////////////////////////////////////////////////
  const prevPage = (): void => {
    let num: number = page - 1;
    setInputText("");
    if (num <= 0) {
      setPage(page);
    } else {
      setPage(num);
    }
  }

  const nextPage = (): void => {
    setInputText("");
    let num: number = page + 1;
    let maxNum: number | undefined | null = charactersData?.info.pages;
    if ((maxNum != undefined || maxNum != null) && num >= maxNum) {
      setPage(maxNum);
    } else {
      setPage(num)
    }
  }

  const lastPage = (): number => {
    setInputText("");
    let maxNum: number | undefined | null = charactersData?.info.pages;
    if ((maxNum != undefined && maxNum != null)) {
      return maxNum;
    }
    return 0;
  }


  const restrictPage = (initial: number) => {
    let num: number = page;
    let maxNum: number | undefined | null = charactersData?.info.pages;
    if ((maxNum != undefined && maxNum != null) && num >= maxNum) {
      return maxNum;
    }
    return num;
  }
  ///////////////////////////////////////////////////////////////



  //Search function//////////////////////////////////////////////
  const [inputText, setInputText] = useState<string>("");
  let inputHandler = (e: any) => {
    //convert input text to lower case
    let lowerCase = e.target.value.toLowerCase();

    //settimeout avoid 429 
    setTimeout(() => {
      setInputText(lowerCase);
    }, 500)
  }


  const List = () => {
    return (
      <>
        {
          (charactersData) ?
            charactersData?.results.map((value: Result, index) => (
              <div key={index} className="contact-details-container"
                onClick={() => {
                  onCharactersDetails(value);
                }}>

                <div className="contactBox-animation">
                  <ContactBox
                    icon={value.image}
                    name={value.name}
                    species={value.species}
                    id={value.id}
                  />
                  <br></br>

                </div>

              </div>
            )) :
            <>
              <Spinner1 color={"white"} />
            </>
        }

      </>

    )

  }



  const searchList = () => {
    //create a new array by filtering the original array
    const filteredData = allCharactersListData?.filter((el: CharacterDetailsData) => {
      //if no input the return the original
      if (inputText === '') {
        return el;
      }
      //return the item which contains the user input
      else {
        return el.name.toLowerCase().includes(inputText)
      }
    })
    return (
      //return the result from fileredData will be back to here
      <>

        {
          (filteredData) ?
            filteredData?.map((value: CharacterDetailsData, index) => (
              <div key={index} className="contact-details-container"
                onClick={() => {
                  // onCharactersDetails(value);
                  onSearchCharactersDetails(value);
                }}>

                {/* <div className={filteredData ? "contactBox-animation" : ""}> */}
                <div>
                  <ContactBox
                    icon={value.image}
                    name={value.name}
                    species={value.species}
                    id={value.id}
                  />
                </div>
                <br></br>

              </div>
            )) :
            <>
              <Spinner1 color={"white"} />
            </>
        }
      </>

    )
  }

  ///////////////////////////////////////////////////////////////////////////// 

  return (
    <div className="flex-container">
      <div className="leftBar-container">
        <div className="title-text" onClick={() => { onContactPage(); setPage(1); setInputText(""); }}>Rick And Morty</div>
        <div className="contact-text" onClick={() => { onContactPage(); setPage(1); setInputText(""); }}>Contact</div>
        <div className="Test" onClick={() => { onTestPage() }}>Test</div>
        <div className="pagination-bar">
          {/* add more page */}
          <Pagination>
            <Pagination.First onClick={() => { setPage(1) }} />
            <Pagination.Prev onClick={() => { prevPage() }} />
            <Pagination.Item onClick={() => { setPage(restrictPage(0)); setInputText("") }}>{restrictPage(0)}</Pagination.Item>
            <Pagination.Next onClick={() => { nextPage() }} />
            <Pagination.Last onClick={() => { setPage(lastPage) }} />
          </Pagination>

        </div>
      </div>

      <div className="contact-container">
        <div className="contact-title-text">Contact</div>
        <Form className="d-flex contact-search">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={inputHandler}
          />
        </Form>
        <div>
          {
            (inputText) ?
              searchList() : List()
          }
        </div>
      </div>
      <ContactDetailsPage key={forceUpdate} />
    </div>
  );
};
