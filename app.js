const site = window.location.hostname;

//alert("Success at " + site + " yeyy");

const Add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css;

function Create_Custom_Element(tag, attr_tag, attr_name, value) {
    const custom_element = document.createElement(tag);
    custom_element.setAttribute(attr_tag, attr_name);
    custom_element.innerHTML = value;
    document.body.append(custom_element);
}

if (site.includes("brutal.fandom.com")) {
    Add_Custom_Style(`
        #wd-menu {
            font-size: 14px;
            padding: 150px 0;
            color: white !important;
            background-color: #636363;
            position: fixed;
            top: 0;
            right:0;
            text-align: center;
            width: auto;
            z-index: 999999;
            height:auto;
            padding:20px;
            margin-top:10%;
            text-decoration: none !important;
            border-radius:10px;
            margin-right:10px;
        }
          
        .wd-btn {
          display: block;
          margin-bottom: 5px;
          padding: 10px;
          border-radius: 5px;
          background-color: white;
          color: black;
          text-decoration: none !important;
          font-size: 14px;
          transition: 0.25s;
          width:100px;
        }

        .wd-btn:hover {
          background-color: #ddd;
          color: black;

        }

        .wd-btn a:hover {          
          text-decoration: none;
        }

        ::-webkit-scrollbar {
          display: none;
          }

        .wd-btn:first-child {
          margin-top: 5px;

        }
    `);

    Create_Custom_Element(
      "div",
      "id",
      "wd-menu",
      "<a href='https://brutal.fandom.com/wiki/Brutal_Wiki' class='wd-btn'>Home</a>" +
      "<a href='https://brutal.fandom.com/wiki/Template:Character_Box' class='wd-btn'>C Boxes</a>" +
      "<a href='https://brutal.fandom.com/wiki/Template:Character_Navbox' class='wd-btn'>C Navbox</a>" +
      "<a href='https://brutal.fandom.com/wiki/Template:Fraksi_Navbox' class='wd-btn'>Fraksi</a>" +
      "<a href='https://brutal.fandom.com/wiki/MediaWiki:Common.css' class='wd-btn'>CSS</a>" +
      "<a href='https://brutal.fandom.com/wiki/Template:Fraksi_Navbox' class='wd-btn'>Fraksi</a>" +
      "<a href='https://brutal.fandom.com/wiki/MediaWiki:Wiki-navigation' class='wd-btn'>Navigation</a>" +
      "<br/><b>Tools</b>" +
      "<a href='?action=edit' class='wd-btn'>Edit</a>" +
      "<a href='javascript:history.go(-1)'  class='wd-btn'>Back</a>"
    );
}

if (site.includes("minecraftid.fandom.com")) {
    Add_Custom_Style(`
          #wd-menu {
            font-size: 14px;
            padding: 150px 0;
            color: white !important;
            background-color: #636363;
            position: fixed;
            top: 0;
            right:0;
            text-align: center;
            width: auto;
            z-index: 999999;
            height:auto;
            padding:20px;
            margin-top:10%;
            text-decoration: none !important;
            border-radius:10px;
            margin-right:10px;
        }
          
        .wd-btn {
          display: block;
          margin-bottom: 5px;
          padding: 10px;
          border-radius: 5px;
          background-color: white;
          color: black;
          text-decoration: none !important;
          font-size: 14px;
          transition: 0.25s;
          width:100px;
        }

        .wd-btn:hover {
          background-color: #ddd;
          color: black;

        }

        .wd-btn a:hover {          
          text-decoration: none;
        }

        ::-webkit-scrollbar {
          display: none;
          }

        .wd-btn:first-child {
          margin-top: 5px;

        }
    `);

    Create_Custom_Element(
      "div",
      "id",
      "wd-menu",
      "<a href='https://minecraftid.fandom.com/id/wiki/Minecraft_Indonesia_Wiki' class='wd-btn'>Home</a>" +
      "<a href='https://minecraftid.fandom.com/id/wiki/MediaWiki:Common.css' class='wd-btn'>CSS</a>" +
      "<a href='https://minecraftid.fandom.com/id/wiki/MediaWiki:Wiki-navigation' class='wd-btn'>Navigation</a>" +
      "<br/><b>Tools</b>" +
      "<a href='?action=edit' class='wd-btn'>Edit</a>" +
      "<a href='javascript:history.go(-1)'  class='wd-btn'>Back</a>" 
    );
}

if (site.includes("youtube.com")) {
  Add_Custom_Style(`
    @import url(“https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css”);

    #wd-menu {
        font-size: 14px;
        padding: 150px 0;
        color: white !important;
        background-color: #636363;
        position: fixed;
        top: 0;
        right:0;
        text-align: center;
        width: auto;
        z-index: 999999;
        height:auto;
        padding:10px;
        margin-top:10%;
        text-decoration: none !important;
        border-radius:10px;
        margin-right:10px;
    }
      
    .wd-btn {
      display: inline-block;
      margin: 0 5px 5px 5px;
      padding: 10px;
      border-radius: 5px;
      background-color: white;
      color: black;
      text-decoration: none !important;
      font-size: 14px;
      transition: 0.25s;
      width:100px;
      float: left;
    }

    .wd-btn:hover {
      background-color: #ddd;
      color: black;

    }

    .wd-btn a:hover {          
      text-decoration: none;
    }

    ::-webkit-scrollbar {
      display: none;
      }

    .fa {
      padding: 20px;
      font-size: 30px;
      width: 50px;
  `);

  Create_Custom_Element(
    "div",
    "id",
    "wd-menu",
    "<a href='https://www.twitter.com/' class='wd-btn'>Twitter</a><a href='https://www.youtube.com/' class='wd-btn'>Youtube</a><br/>" +
    "<a href='https://www.instagram.com/' class='wd-btn'>Instagram</a><a href='https://open.spotify.com/' class='wd-btn'>Spotify</a>"
  );
}