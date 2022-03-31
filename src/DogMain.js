import kyo from './kyo.png';
import './App.css';
import { faker } from "@faker-js/faker";
import { useContext } from 'react';

const testData = [
  {
      text: "悠久한 歷史와 傳統에 빛나는 우리 大韓國民은 3・1運動으로 建立된 大韓民國臨時政府의 法統과 不義에 抗拒한 4.19民主理念을 繼承하고",
      imgUrl: "http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg"
  },{
    text: "祖國의 民主改革과 平和的 統一의 使命에 立脚하여 正義・人道와 同胞愛로써 民族의 團結을 공고히 하고",
    imgUrl: "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201901/20/28017477-0365-4a43-b546-008b603da621.jpg"
  },{
    text: "모든 社會的 弊習과 不義를 打破하며",
    imgUrl: "https://interbalance.org/wp-content/uploads/2021/08/flouffy-VBkIK3qj3QE-unsplash-scaled-e1631077364762.jpg"
  }
]

function DogMain() {
  const h1Element = <h1>H1 題目 태그입니다。</h1>
  const imgElement = <img src={kyo} className="App-logo" alt="logo" />;
  
  return (
      <>
        { h1Element }
        { imgElement }

        <p>
          한글로 변경해 보세요。 <code>src/App.js</code> and save to reload.
        </p>
          {testData.map((contents)=>{
            return <div>
            <img src={faker.image.avatar()} alt="강아지 사진" />
            {contents.text}
            <img src={faker.image.cats()} alt="강아지 사진" />
            {contents.text}
            <img src={contents.imgUrl} alt=""/>
            </div>
          })}
    </>
  );
}

export default DogMain;
