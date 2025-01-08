# Project Setup and Execution Guide

## Prerequisites

###### Docker Docker:

Ensure Docker is installed on your system. If not, download and install it from the official Docker website.

### Getting Started

###### Clone the Repository:

Open your terminal and execute:
git clone (https://github.com/sachinda123/aicpa_tech_challenge "git@github.com:sachinda123/aicpa_tech_challenge.git")
Navigate to the Project Directory:

```sh
cd <project_folder>
```

Open the Project in Your Preferred Editor:

###### Launch your code editor (e.g., Visual Studio Code) and open the project directory.

##### Running the Application

The application can be run in two modes: Development and Production.

###### 1. Development Mode

This mode is intended for development purposes, allowing for hot-reloading when code changes are made.

Steps:

1. Modify docker-compose.yml: Open the docker-compose.yml file and locate the service configuration for your application. Update the command property as follows:

```sh
command: sh -c "npm install && npm run dev"
```

This command ensures that dependencies are installed, and the application runs in development mode.
Tools like ts-node are used to watch for code changes and reload the application automatically.

Start the Application: In the terminal, from the project root directory, execute:

```sh
docker-compose up

```

Docker will build the images and start the containers. Once completed, you should see a message indicating that the application is running.

#### Run Test Cases: To execute the test cases:

List all running containers:

```sh
docker ps
```

Identify the container ID associated with your application service.
Access the container's shell:

```sh
docker exec -it <container_id> sh

```

Inside the container, run:

```sh
npm run test
```

This will execute the test suite, and the results will be displayed in the terminal.

###### 2. Production Mode

This mode is used to deploy the application in a production environment.

Steps:

Modify docker-compose.yml: Open the docker-compose.yml file and update the command property for your application service:

yaml
Copy code
command: sh -c "npm install && npm run build && npm run start"
This command installs dependencies, builds the application, and starts it in production mode.

Start the Application: In the terminal, from the project root directory, execute:
docker-compose up --build
Docker will build the images and start the containers optimized for production. Once completed, the application will be running and ready to handle production traffic.

### Features

- Support Standard Markdown / CommonMark and GFM(GitHub Flavored Markdown);
- Full-featured: Real-time Preview, Image (cross-domain) upload, Preformatted text/Code blocks/Tables insert, Code fold, Search replace, Read only, Themes, Multi-languages, L18n, HTML entities, Code syntax highlighting...;
- Markdown Extras : Support ToC (Table of Contents), Emoji, Task lists, @Links...;
- Compatible with all major browsers (IE8+), compatible Zepto.js and iPad;
- Support identification, interpretation, fliter of the HTML tags;
- Support TeX (LaTeX expressions, Based on KaTeX), Flowchart and Sequence Diagram of Markdown extended syntax;
- Support AMD/CMD (Require.js & Sea.js) Module Loader, and Custom/define editor plugins;

# Editor.md

![](https://pandao.github.io/editor.md/images/logos/editormd-logo-180x180.png)

![](https://img.shields.io/github/stars/pandao/editor.md.svg) ![](https://img.shields.io/github/forks/pandao/editor.md.svg) ![](https://img.shields.io/github/tag/pandao/editor.md.svg) ![](https://img.shields.io/github/release/pandao/editor.md.svg) ![](https://img.shields.io/github/issues/pandao/editor.md.svg) ![](https://img.shields.io/bower/v/editor.md.svg)

**Table of Contents**

[TOCM]

[TOC]

#H1 header
##H2 header
###H3 header
####H4 header
#####H5 header
######H6 header
#Heading 1 link [Heading link](https://github.com/pandao/editor.md "Heading link")
##Heading 2 link [Heading link](https://github.com/pandao/editor.md "Heading link")
###Heading 3 link [Heading link](https://github.com/pandao/editor.md "Heading link")
####Heading 4 link [Heading link](https://github.com/pandao/editor.md "Heading link") Heading link [Heading link](https://github.com/pandao/editor.md "Heading link")
#####Heading 5 link [Heading link](https://github.com/pandao/editor.md "Heading link")
######Heading 6 link [Heading link](https://github.com/pandao/editor.md "Heading link")

##Headers (Underline)

# H1 Header (Underline)

## H2 Header (Underline)

###Characters

---

~~Strikethrough~~ <s>Strikethrough (when enable html tag decode.)</s>
_Italic_ _Italic_
**Emphasis** **Emphasis**
**_Emphasis Italic_** **_Emphasis Italic_**

Superscript: X<sub>2</sub>，Subscript: O<sup>2</sup>

**Abbreviation(link HTML abbr tag)**

The <abbr title="Hyper Text Markup Language">HTML</abbr> specification is maintained by the <abbr title="World Wide Web Consortium">W3C</abbr>.

###Blockquotes

> Blockquotes

Paragraphs and Line Breaks

> "Blockquotes Blockquotes", [Link](http://localhost/)。

###Links

[Links](http://localhost/)

[Links with title](http://localhost/ "link title")

`<link>` : <https://github.com>

[Reference link][id/name]

[id/name]: http://link-url/

GFM a-tail link @pandao

###Code Blocks (multi-language) & highlighting

####Inline code

`$ npm install marked`

####Code Blocks (Indented style)

Indented 4 spaces, like `<pre>` (Preformatted Text).

    <?php
        echo "Hello world!";
    ?>

Code Blocks (Preformatted text):

    | First Header  | Second Header |
    | ------------- | ------------- |
    | Content Cell  | Content Cell  |
    | Content Cell  | Content Cell  |

####Javascript

```javascript
function test() {
  console.log("Hello world!");
}

(function () {
  var box = function () {
    return box.fn.init();
  };

  box.prototype = box.fn = {
    init: function () {
      console.log("box.init()");

      return this;
    },

    add: function (str) {
      alert("add", str);

      return this;
    },

    remove: function (str) {
      alert("remove", str);

      return this;
    },
  };

  box.fn.init.prototype = box.fn;

  window.box = box;
})();

var testBox = box();
testBox.add("jQuery").remove("jQuery");
```

####HTML code

```html
<!DOCTYPE html>
<html>
  <head>
    <mate charest="utf-8" />
    <title>Hello world!</title>
  </head>
  <body>
    <h1>Hello world!</h1>
  </body>
</html>
```

###Images

Image:

![](https://pandao.github.io/editor.md/examples/images/4.jpg)

> Follow your heart.

![](https://pandao.github.io/editor.md/examples/images/8.jpg)

> 图为：厦门白城沙滩 Xiamen

图片加链接 (Image + Link)：

[![](https://pandao.github.io/editor.md/examples/images/7.jpg)](https://pandao.github.io/editor.md/examples/images/7.jpg "李健首张专辑《似水流年》封面")

> 图为：李健首张专辑《似水流年》封面

---

###Lists

####Unordered list (-)

- Item A
- Item B
- Item C

####Unordered list (\*)

- Item A
- Item B
- Item C

####Unordered list (plus sign and nested)

- Item A
- Item B
  - Item B 1
  - Item B 2
  - Item B 3
- Item C
  - Item C 1
  - Item C 2
  - Item C 3

####Ordered list

1. Item A
2. Item B
3. Item C

---

###Tables

| First Header | Second Header |
| ------------ | ------------- |
| Content Cell | Content Cell  |
| Content Cell | Content Cell  |

| First Header | Second Header |
| ------------ | ------------- |
| Content Cell | Content Cell  |
| Content Cell | Content Cell  |

| Function name | Description                |
| ------------- | -------------------------- |
| `help()`      | Display the help window.   |
| `destroy()`   | **Destroy your computer!** |

| Item     | Value |
| -------- | ----: |
| Computer | $1600 |
| Phone    |   $12 |
| Pipe     |    $1 |

| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ | :-------------: | ------------: |
| col 3 is      | some wordy text |         $1600 |
| col 2 is      |    centered     |           $12 |
| zebra stripes |    are neat     |            $1 |

---

####HTML entities

&copy; & &uml; &trade; &iexcl; &pound;
&amp; &lt; &gt; &yen; &euro; &reg; &plusmn; &para; &sect; &brvbar; &macr; &laquo; &middot;

X&sup2; Y&sup3; &frac34; &frac14; &times; &divide; &raquo;

18&ordm;C &quot; &apos;

##Escaping for Special Characters

\*literal asterisks\*

##Markdown extras

###GFM task list

- [x] GFM task list 1
- [x] GFM task list 2
- [ ] GFM task list 3
  - [ ] GFM task list 3-1
  - [ ] GFM task list 3-2
  - [ ] GFM task list 3-3
- [ ] GFM task list 4
  - [ ] GFM task list 4-1
  - [ ] GFM task list 4-2

###Emoji mixed :smiley:

> Blockquotes :star:

####GFM task lists & Emoji & fontAwesome icon emoji & editormd logo emoji :editormd-logo-5x:

- [x] :smiley: @mentions, :smiley: #refs, [links](), **formatting**, and <del>tags</del> supported :editormd-logo:;
- [x] list syntax required (any unordered or ordered list supported) :editormd-logo-3x:;
- [x] [ ] :smiley: this is a complete item :smiley:;
- [ ] []this is an incomplete item [test link](#) :fa-star: @pandao;
- [ ] [ ]this is an incomplete item :fa-star: :fa-gear:;
  - [ ] :smiley: this is an incomplete item [test link](#) :fa-star: :fa-gear:;
  - [ ] :smiley: this is :fa-star: :fa-gear: an incomplete item [test link](#);

###TeX(LaTeX)

$$E=mc^2$$

Inline $$E=mc^2$$ Inline，Inline $$E=mc^2$$ Inline。

$$\(\sqrt{3x-1}+(1+x)^2\)$$

$$\sin(\alpha)^{\theta}=\sum_{i=0}^{n}(x^i + \cos(f))$$

###FlowChart

```flow
st=>start: Login
op=>operation: Login operation
cond=>condition: Successful Yes or No?
e=>end: To admin

st->op->cond
cond(yes)->e
cond(no)->op
```

###Sequence Diagram

```seq
Andrew->China: Says Hello
Note right of China: China thinks\nabout it
China-->Andrew: How are you?
Andrew->>China: I am good thanks!
```

###End
