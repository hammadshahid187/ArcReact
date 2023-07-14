import React from 'react'

export const EventCard = () => {

    const EventBox=[
        {
            "title":"Cluster 1",
            "description":"T-Mobile US insiders, including the President of Marketing and the Senior VP of Finance & Chief Accounting Officer, sold US$7.1 million in shares over the past year, raising concerns among investors. Despite this, the company shows high insider ownership (0.7%), suggesting aligned interests with shareholders.",
            "date":"Dec. 26, 2022 at 5:52 am"
        },
        {
            "title":"Cluster 2",
            "description":"T-Mobile US insiders, including the President of Marketing and the Senior VP of Finance & Chief Accounting Officer, sold US$7.1 million in shares over the past year, raising concerns among investors. Despite this, the company shows high insider ownership (0.7%), suggesting aligned interests with shareholders.",
            "date":"Dec. 26, 2022 at 5:52 am"
        },
        {
            "title":"Cluster 3",
            "description":"T-Mobile US insiders, including the President of Marketing and the Senior VP of Finance & Chief Accounting Officer, sold US$7.1 million in shares over the past year, raising concerns among investors. Despite this, the company shows high insider ownership (0.7%), suggesting aligned interests with shareholders.",
            "date":"Dec. 26, 2022 at 5:52 am"
        }
    ]
  return (
    <>
    {EventBox.map((item)=>(
        <div className="event-cardbox box-shadow rounded mt-4"> 
            <div className="row m-0">
                <div className="col-lg-3 col-md-3 col-12 ps-0 my-lg-auto my-md-auto my-3">
                    <h4 className="mb-0">{item.title}</h4>
                </div>
                <div className="col-lg-6 ps-0 col-md-6 col-9 d-flex justify-lg-content-center justify-md-content-center justify-content-start">
                    <div className="border-primary px-2 all-center">
                        <span className="text-primary">NASDAQ</span><span className="text-success ms-1">0.21%</span>
                    </div>
                    <div className="border-primary px-2 all-center ms-lg-3 ms-md-3 ms-2">
                        <span className="text-primary">TMUS</span><span className="text-danger ms-1">0.21%</span>
                    </div>
                    <div className="border-primary px-2 all-center ms-lg-3 ms-md-3 ms-2">
                        <span className="text-primary">+7</span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-3 ">
                    <button className="btn p-0 all-center shadow-btn ms-auto"><i className="fa-solid fa-thumbtack"></i></button>
                </div>
            </div>
            <p className="medium-text my-3">{item.description}</p>
            <div className="row m-0">
                <div className="col-6 ps-0">
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#EventModel">See Details</button>
                </div>
                <div className="col-6 text-end mt-auto">
                    <span>{item.date}</span>
                </div>
            </div>
        </div>

        
        ))}
        </>
  )
}
