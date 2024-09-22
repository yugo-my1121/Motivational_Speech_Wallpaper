// ここから書いてください。
class Wallpaper{
  constructor(text,color,imgUrl,yPosition,xPosition){
      this.text = text;
      this.color = color;
      this.imgUrl = imgUrl;
      this.xPosition = xPosition;
      this.yPosition = yPosition;
  }
}

const x_position = {
  "left": "start",
  "center":"center",
  "right":"end"
}

const y_position = {
  "top": "start",
  "center":"center",
  "bottom":"end"
}

function motivationalSpeechWallpaper(wallpaper,htmlObj){
  //一番外枠のdiv
  let container = document.createElement("div")
  container.classList.add("container","d-flex","justify-content-center","h-auto");

  container.innerHTML =
      `
          <div style="background-image: url('${wallpaper.imgUrl}'); height: 50vh;"   class="backgroundImg d-flex justify-content-${x_position[wallpaper.xPosition]} align-items-${y_position[wallpaper.yPosition]} my-3">
              <div class="col-8" style="color: #${wallpaper.color}">
                  <h3>${wallpaper.text}</h3>
              </div>
          </div>

      `

  //要素組み立て
  htmlObj.append(container);


}

// 関数呼び出しの例
let domObj = document.getElementById("target");

//オブジェクト作成
let Wallpaper1 = new Wallpaper("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint", "1B4F72", "https://cdn.pixabay.com/photo/2020/06/12/03/06/magnifying-glass-5288877__340.jpg", "top", "right");
let Wallpaper2 = new Wallpaper("The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg", "007bff", "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg", "center", "left");
let Wallpaper3 = new Wallpaper("Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman", "ecf0f1", "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg", "center", "center");


//カードを表示
motivationalSpeechWallpaper(Wallpaper1,domObj);
motivationalSpeechWallpaper(Wallpaper2,domObj);
motivationalSpeechWallpaper(Wallpaper3,domObj);
