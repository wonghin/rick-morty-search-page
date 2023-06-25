import React, { useEffect, useRef, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { CharacterDetailsData } from "../../data/CharactersDataDetails";
import { EpisodeData } from "../../data/EpisodeData";
import {
    getAllEpisodeByApi,
    getCharactersDataById,

} from "../../resource/CharactersDataResource";
import "./style.css";
import cMockData from './characterDetailsMockData.json'
import eMockData from './episodeDataMockData.json'
import { Spinner1 } from "../../component/Spinner";
import { Scrollbars } from 'react-custom-scrollbars-2';

type Params = {
    id: string;
};

export const ContactDetailsPage = () => {
    const params = useParams<Params>();
    const [charactersDetailsData, setCharactersDetailsData] = useState<
        CharacterDetailsData | undefined | null
    >(undefined);

    const [episodeData, setEpisodeData] = useState<
        EpisodeData[] | undefined | null
    >(undefined);
    const [episodeApi, setEpisodeApi] = useState<string[] | undefined | null>(undefined);
    const [forceUpdate, setForceUpdate] = useState<number>(0);

    function usePrevious(value: any) {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        }, [value]);
        return ref.current;
    }
    // const prevEpisodeApi = useRef<string[] | undefined | null>();

    useEffect(() => {
        if (episodeApi) {
            getAllEpisodeByApi(episodeApi, onLoadEpisodeData);
        }
    }, [charactersDetailsData])

    useEffect(() => {
        if (params.id) {
            getCharactersDataById(params.id, onLoadcharactersDetailsData);
        } else {
            //set the initial data 
            setCharactersDetailsData(cMockData);
            setEpisodeData(eMockData);
        }
    }, []);

    //onLoadData for resource receive the function then send data back
    const onLoadcharactersDetailsData = (
        data?: CharacterDetailsData | null
    ): void => {
        setCharactersDetailsData(data);

        let temp: string[] = [];
        data?.episode.map((value) => {
            temp.push(value);
        });

        setEpisodeApi(temp);

    };

    const onLoadEpisodeData = (data?: EpisodeData[]) => {
        setEpisodeData(data);
        setForceUpdate(forceUpdate + 1);

    };
    //////////////////////////////////////////////////////////////////

    return (
        <>
            <div className="character-container">
                {/* <Scrollbars> */}
                <div className="character-image-container">
                    {
                        (charactersDetailsData?.image) ?
                            <img className="character-image" src={charactersDetailsData?.image} />
                            :
                            <div style={{ paddingTop: "120px", paddingLeft: "120px" }}>
                                <Spinner1 color={"#36d7b7"} />

                            </div>

                    }
                    <div className="character-title-text">
                        {
                            (charactersDetailsData?.name) ?
                                charactersDetailsData?.name :
                                <div style={{ paddingTop: "0px", paddingLeft: "150px" }}>
                                    {/* <Spinner1 color={"white"} /> */}
                                    <Spinner1 color={"#36d7b7"} />
                                </div>
                        }
                    </div>
                </div>

                <br></br>

                <div className="character-personal-details-container">
                    <div className="character-personal-details">
                        <div style={{ color: "aquamarine" }}>
                            Personal info:
                        </div>
                        <Table variant="dark" striped hover responsive className="table-fixed">
                            <tbody>
                                <tr>
                                    <td className="col-3">Status</td>
                                    <td className="col-3">
                                        {(charactersDetailsData?.status) ? <div>{charactersDetailsData?.status}</div> : <Spinner1 color={"#36d7b7"} />}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="col-3">Gender</td>
                                    <td className="col-3">
                                        {(charactersDetailsData?.gender) ? <div>{charactersDetailsData?.gender}</div> : <Spinner1 color={"#36d7b7"} />}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="col-3">Location</td>
                                    <td className="col-3">
                                        {(charactersDetailsData?.location) ? <div>{charactersDetailsData?.location.name}</div> : <Spinner1 color={"#36d7b7"} />}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="col-3">Origin</td>
                                    <td className="col-3">
                                        {(charactersDetailsData?.origin) ? <div>{charactersDetailsData?.origin.name}</div> : <Spinner1 color={"#36d7b7"} />}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="col-3">Date</td>
                                    <td className="col-3">
                                        {(charactersDetailsData?.created) ? <div>{charactersDetailsData?.created}</div> : <Spinner1 color={"#36d7b7"} />}
                                    </td>
                                </tr>


                            </tbody>
                        </Table>
                    </div>


                    {/* Personal info: */}
                    {/* <div className="character-personal-details">

                    </div> */}
                    <br></br>
                    <div>
                        <div>Episode Info: </div>
                        <div className="character-episode-container">

                            <Table variant="dark" striped hover responsive className="table-fixed" style={{ marginBottom: "30px" }}>
                                <thead style={{ color: "white" }}>
                                    <tr>
                                        <th scope="col" className="col-3">Name</th>
                                        <th scope="col" className="col-3">Air Date</th>
                                        <th scope="col" className="col-3">Episode</th>
                                        <th scope="col" className="col-3">Created Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {episodeData ? (
                                        episodeData.map((value, index) => {

                                            return (
                                                <tr key={index}>
                                                    <th scope="col" className="col-3">{value.name}</th>
                                                    <th scope="col" className="col-3">{value.air_date}</th>
                                                    <th scope="col" className="col-3">{value.episode}</th>
                                                    <th scope="col" className="col-3">{value.created}</th>
                                                </tr>
                                            );
                                        })
                                    ) : (
                                        <tr>
                                            <th scope="col" className="col-3">{<Spinner1 color={"#36d7b7"} />}</th>
                                            <th scope="col" className="col-3">{<Spinner1 color={"#36d7b7"} />}</th>
                                            <th scope="col" className="col-3">{<Spinner1 color={"#36d7b7"} />}</th>
                                            <th scope="col" className="col-3">{<Spinner1 color={"#36d7b7"} />}</th>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>

                        </div>
                    </div>
                </div>
                {/* </Scrollbars> */}
            </div>
        </>
    );
};
