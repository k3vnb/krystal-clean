import React from 'react';

function About() {

  return(
    <div className="main-container about-container">
      <style jsx>{`
          .main-container {
            font-family: 'Carrois Gothic', sans-serif;
            min-height: 120vh;
            margin-bottom: 55vw;
          }
          .about-upper {
            display: flex;
            align-items: center;
            height: 20%;
            width: 100%;
            margin: 8% 0%;
          }
          .about-upper-half {
            width: 49%;
            height: 100%;
            display: flex;
            align-items: center;
            padding: 2%;
            margin-bottom: 5%;
          }
          .about-upper-left {
            border-right: 3px solid black;
            margin-right: 1%;
            text-align: center;
            height: 60%;
          }
          .about-upper-right {
            margin-left: 12%;
            display: flex;
            align-items: center;
            font-size: 1.5vw;
          }
          .about-lower {
            width: 120%;
            margin-left: -10%;
          }
          .hi {
            margin-right: 12%;
            font-size: 14vw;
          }
          .leader-text {
            font-size: 2.5vw;
            margin-left: -4px;
          }
          .leader-text2 {
            font-size: 2.15vw;
          }
          .about-lower {
            font-size: 1.7vw;
          }
          .skills-list {
            width: 110%;
            margin-left: -7%;
            list-style: circle inside;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          }
          .skills-list li {
            width: 45%;
            margin-left: 2%;
          }
          .main-container p {
            margin-bottom: 5%;
          }

          @media screen and (max-width: 650px){
            .leader-text {
              font-size: 14px;
            }
            .about-upper-right {
              font-size: 10px;
            }
            .leader-text2 {
              font-size: 14px;
            }
            .about-lower {
              font-size: 11px;
            }
            .about-lower ul {
              font-size: 10px;
              width: 120%;
              margin-left: -10%;
            }
          }
          @media screen and (max-width: 460px){
            .main-container {
              margin-bottom: 80vw;
              margin-top: 5vh;
            }
          }
          @media screen and (max-width: 400px){
            .about-lower ul {
              font-size: 7.6px;
            }
          }
            `}</style>
      <div className="about-upper">
        <div className="about-upper-half about-upper-left">
          <h2 className="hi">Hi</h2>
        </div>
        <div className="about-upper-half about-upper-right">
          <p><span className="leader-text">Thank you</span> for visiting. My name is Kevin. I live in Portland, Oregon, where I design & develop websites.</p>
        </div>
      </div>
      <div className="about-lower">
        <p><span className="leader-text2">Sed ut perspiciatis unde omnis</span> iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>


      </div>
    </div>
  );
}

export default About;
