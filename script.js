const helpDivData = [
  `to set user and email for git use following commands: <br />
      <span>git config --global user.name &lt;your name&gt; </span> to set
      user name (use double quotes if you want to set "name surname")
      <br />
      <span>git config --global user.email &lt;your email&gt;</span> to set
    email`,
  `you can clone a private repository from your account or organization if you're its owner or collaborator. Firstly, to clone a private repository you need to generate a PAT(Personal Access Token) on your Github account, and add it to the URL in the following git command: </br> <span>git clone &lt;your URL in the format: https://[generated-access-token]@github.com/[your-account-or-organization]/[repository-name].git&gt;</span> </br> Assume that you've generated access token and use this URL: https://access-token@github.com/dev-team/project-n.git`,
  `the column-gap CSS property sets the size of the gap between an element's columns. Use working area to set the column-gap to 20px in an element with class = "box" in styles.css file`,
  `to stage changes use following git command: </br> <span>git add &lt;file name&gt; </span> (to stage specific file) </br> or </br> <span> git add .  </span> (to stage all files in working directory) </br> Why stage files? These are changes that you have "staged" (specified, prepared) for the next commit(capture a snapshot of the project's currently staged changes). When you attempt to make a commit, git checks the staging area for the specified changes that would be part of that commit. If it finds some changes there, it adds those changes to the commit. If it doesn't find any change there, it informs you that there are no (staged) changes to commit.`,
  `the git commit command captures a snapshot of the project's currently staged changes. Committed snapshots can be thought of as “safe” versions of a project. Git will never change them unless you explicitly ask it to. You can make commit with the following command: </br> <span>git commit -m "messagge that describes your commit"</span>`,
  `the git push command is used to upload local repository committed content to a remote repository. Pushing is how you transfer commits from your local repository to a remote repo. To push commited changes use following command: </br> <span>git push origin main</span>, which refers to <span> git push [name of remote repository] [name of the branch we want to push to] </span>`,
  `here's the branches in git: when you want to add a new feature or fix a bug — you spawn a new branch to encapsulate your changes. This makes it harder for unstable code to get merged into the main code base, and it gives you the chance to clean up your future's history before merging it into the main/base branch. A branch represents an independent line of development. Branches serve as an abstraction for the edit/stage/commit process. You can think of them as a way to request a brand new working directory, staging area, and project history. New commits are recorded in the history for the current branch, which results in a fork in the history of the project (see branches visualization). To create new branch use following command: </br> <span>git branch &lt;branch name&gt;</span> </br> + to switch branches use: </br> <span>git checkout &lt;branch name&gt;</span> </br> to create and switch to new branch at once use: <span>git checkout -b &lt;branch name&gt;</span>`,
  `use working area to change index.html file, add &lt;div&gt;title 4&lt;/div&gt; line after title 3-div`,
  `to make text in html element uppercase use <span> text-transform: uppercase; </span> syntax in styles file at needed selector`,
  `to stage changes use following git command: </br> <span>git add &lt;file name&gt; </span> (to stage specific file) </br> or </br> <span> git add . </span> (to stage all files in working directory) </br> You can make commit with the following command: </br> <span>git commit -m "message that describes your commit"</span> `,
  `to push new (remote repository doesn't know about this branch yet) branch to remote repository use following command: </br> <span>git push origin -u &lt;branch name&gt;</span> </br> The <span> -u </span> is the short for <span> --set-upstream </span> command that initiates tracking of a new branch by git`,
  `a pull request is a proposal to merge a set of changes from one branch into another. In our case we want to merge "title-4" branch in "main" branch. In a pull request, collaborators can review and discuss the proposed set of changes before they integrate the changes into the main codebase. Pull requests display the differences, or diffs, between the content in the source branch and the content in the target branch + Git system will check for conflicts between branches. All discussions and differences are available at your GitHub.com account after creating pull request. </br> You can create pull requests on your account GitHub.com, with GitHub Desktop, in GitHub Codespaces, on GitHub Mobile, and when using GitHub CLI. <span> Now just press create pull request button. </span>`,
  `to switch branches use: </br> <span>git checkout &lt;branch name&gt;</span>`,
  `the git fetch command downloads commits, files, and refs from a remote repository into your local repo. Fetching is what you do when you want to see what everybody else has been working on (to see all commits (usual git log command will display only commits in current branch) use <span> git log --all </span> command) - you will see how the central history has progressed, but it does not force you to actually merge the changes into your repository. </br> Git isolates fetched content from existing local content; it has absolutely no effect on your local development work. Fetched content has to be explicitly checked out using the git checkout command (to see fetched branches use <span> git branch -r </span> command; you can see commits in those branches using <span> git log </span> command after switching to them simply using <span> git checkout &lt;branch name&gt; </span> command). This makes fetching a safe way to review commits before integrating them with your local repository amd working directory </br> </br> Now to fetch changes from remote repository use <span> git fetch origin </span> command.`,
  `git merge is used to combine two branches. git merge takes two commit pointers, usually the branch tips, and will find a common base commit between them. Once Git finds a common base commit it will create a new "merge commit" that combines the changes of each queued merge commit sequence. Merge commits are unique against other commits in the fact that they have two parent commits. This way you can merge local branch to the remote branch that we've fetched earlier. It's important that HEAD branch pointer will should be at the receieving 'base' branch in our case it's main branch and the branch we want to implement is remote version of a main branch named origin/main </br> So to merge changes(remember we've fetched them earlier by using <span>git fetch origin</span> command) from remote branch use following command: <span>git merge origin/main</span>`,
  `you can refresh page to start again`,
];

const row01 = document.querySelectorAll("[data-task='01']");
const row02 = document.querySelectorAll("[data-task='02']");
const row03 = document.querySelectorAll("[data-task='03']");
const row04 = document.querySelectorAll("[data-task='04']");
const row05 = document.querySelectorAll("[data-task='05']");
const row06 = document.querySelectorAll("[data-task='06']");
const task01 = document.getElementById("task-01");
const task02 = document.getElementById("task-02");
const task03 = document.getElementById("task-03");
const task04 = document.getElementById("task-04");
const task05 = document.getElementById("task-05");
const task06 = document.getElementById("task-06");

//====== help section info =========
const helpBtn = document.getElementById("help");
const helpDiv = document.getElementById("help-info");
helpBtn.addEventListener("click", () => {
  helpDiv.style.maxHeight = helpDiv.style.maxHeight === "400px" ? "0" : "400px";
});

// ======= Greeting Popup =======
const onloadPopup = new Popup({
  id: "onloadPopup",
  title: "Welcome to the devteam!",
  content: `
      Imagine your team is developing a website for a client. You are going to work in a GIT version control system and GitHub to collaborate with a team. Git is a version control system that you download onto your computer. It is essential that you use Git if you want to collaborate with other developers on a coding project or work on your own project. GitHub is a product that allows you to host your Git projects on a remote server somewhere (or in other words, in the cloud). To better understand how to use GIT and GitHub to collaborate with a team, I've created this site. And I hope this will help you too.
       Here is the tools to help you out:
      - kanban simple table (to track your tasks)
      - table representating files' migration in GIT (to track what files were staged, committed, pushed)
      - git log and git status commands output (to track current state of a project)
      - branches visualization
      - very simplified working area
      - terminal input.
      Don't worry you can always click on a '?' symbol beside every tool to see full explanation. Also click on HELP button to see step-by-step instructions with explanation on how to do current kanban task if you're not sure.
      {btn-popup-button}[Got it!]`,
  showImmediately: true,
  backgroundColor: "#161616",
  titleColor: "#fff",
  textColor: "#fff",
  allowClose: false,
  css: `
      .popup.onloadPopup .popup-content {
        box-shadow: -2px -2px 20px -5px #bae11d;
      }
      .popup.onloadPopup .popup-button {
        border: none;
        border-radius: 0;
        padding: 3px 25px;
      }
      .popup.onloadPopup .popup-title {
        font-size: 28px;
      }`,
  fontSizeMultiplier: 0.7,
  loadCallback: () => {
    const gotItBtn = document.querySelector(".popup-button");
    gotItBtn.addEventListener("click", () => {
      onloadPopup.hide();
      row01[0].innerHTML = "";
      row01[1].appendChild(task01);
      helpDiv.innerHTML = helpDivData[0];
    });
  },
});

const part1DonePopup = new Popup({
  id: "part1DonePopup",
  title: "Congratulations!",
  content: `Your 1st day in a devteam is over! Get ready for the 2nd day!
  {btn-ready}[Ready!]`,
  backgroundColor: "#161616",
  titleColor: "#fff",
  textColor: "#fff",
  allowClose: false,
  css: `
      .popup.part1DonePopup .popup-content {
        box-shadow: -2px -2px 20px -5px #bae11d;
      }
      .popup.part1DonePopup .ready {
        border: none;
        border-radius: 0;
        padding: 3px 25px;
      }
      .popup.part1DonePopup .popup-title {
        font-size: 28px;
      }`,
  fontSizeMultiplier: 0.7,
  loadCallback: () => {
    const readyBtn = document.querySelector(".ready");
    readyBtn.addEventListener("click", () => {
      part1DonePopup.hide();
      task01.innerHTML = `you are in charge of adding new title in box-div, create new branch named "title-4" for that and switch to new branch`;
      row01.forEach((row) => {
        row.setAttribute("data-task", "07");
      });
      row01[1].appendChild(task01);

      task02.innerHTML = `add in index.html file box-div new div with "title 4" content after 'title 3'-div`;
      row02.forEach((row) => {
        row.setAttribute("data-task", "08");
      });
      row02[0].appendChild(task02);

      task03.innerHTML = `in styles.css file make all in box-div uppercase`;
      row03.forEach((row) => {
        row.setAttribute("data-task", "09");
      });
      row03[0].appendChild(task03);

      task04.innerHTML = `stage and commit all changes with the message "title 4 added"`;
      row04.forEach((row) => {
        row.setAttribute("data-task", "10");
      });
      row04[0].appendChild(task04);

      task05.innerHTML = `push branch "title-4" to remote repository`;
      row05.forEach((row) => {
        row.setAttribute("data-task", "11");
      });
      row05[0].appendChild(task05);

      task06.innerHTML = `<button id='pull-request'>create pull request for 'title-4'</button>`;
      row06.forEach((row) => {
        row.setAttribute("data-task", "12");
      });
      row06[0].appendChild(task06);
    });
  },
});

const pullRequestPopup = new Popup({
  id: "pullRequestPopup",
  title: "Pull Request!",
  content: `base: main &lt;- compare: title-4   
  {green}[&#10003; Able to merge.] These branches can be automatically merged.
  Title: title-4 branch merging
  Description: added title 4 in a box-div in index.html file, made box-div uppercase
  {btn-confirm}[Confirm merge]`,
  backgroundColor: "#161616",
  titleColor: "#fff",
  textColor: "#fff",
  allowClose: false,
  css: `
      .popup.pullRequestPopup .popup-content {
        box-shadow: -2px -2px 20px -5px #bae11d;
      }
      .popup.pullRequestPopup .ready {
        border: none;
        border-radius: 0;
        padding: 3px 25px;
      }
      .popup.pullRequestPopup .popup-title {
        font-size: 28px;
      }`,
  fontSizeMultiplier: 0.7,
  loadCallback: () => {
    const confirmPullRequest = document.querySelector(".confirm");
    confirmPullRequest.addEventListener("click", () => {
      pullRequestPopup.hide();
      task01.innerHTML = `switch to branch main`;
      row01.forEach((row) => {
        row.setAttribute("data-task", "13");
      });
      row01[1].appendChild(task01);

      task02.innerHTML = `fetch changes from remote repository`;
      row02.forEach((row) => {
        row.setAttribute("data-task", "14");
      });
      row02[0].appendChild(task02);

      task03.innerHTML = `merge remote changes to local branch main`;
      row03.forEach((row) => {
        row.setAttribute("data-task", "15");
      });
      row03[0].appendChild(task03);

      task04.style.display = "none";
      row04.forEach((row) => {
        row.setAttribute("data-task", "false");
      });
      // row04[0].appendChild(task04);

      task05.style.display = "none";
      row05.forEach((row) => {
        row.setAttribute("data-task", "false");
      });
      //row05[0].appendChild(task05);

      task06.style.display = "none";
      row06.forEach((row) => {
        row.setAttribute("data-task", "false");
      });
      //row06[0].appendChild(task06);
    });
  },
});

const mergedPopup = new Popup({
  id: "mergedPopup",
  title: "You successfully pulled changes from remote repository",
  content: `now in git log command output you will see new commit representing result of merging branch main + branch title-4. In branch main now will be available changes from title-4 branch. That way developers use branching to add some new features or fix bugs risk-free from accidentally breaking whole code in main/base branch.
  Also there is new commit by your coworker with the message "updated style.css", so by fetching and merging you can either merge remote branches and update them or merge local branches. Another way to do it is using {green}[git pull origin] command: it's a combination of git fetch and git merge commands.
  That is a simple work flow in collaborative GIT + GitHub. You make a branch - develop and commit (in development process you need to update your local repository from time to time using {green}[git fetch & git merge] or {green}[git pull] commands), push that branch to remote repository, create a pull request, team is making discussions on your code and either merge your branch in main/base branch or gives you some remarks to fix in your code (all in GitHub accounts), after merging branches in GitHub pull new changes from remote repository and all process starts again. 
  Of course there are more topics to cover in GIT commands (how to initialize new repository on your local machine, how to undo things, tagging, rebasing etc) but here's the main point. 
  Wish you happy coding!</br> 
  {btn-got}[Great!]`,
  backgroundColor: "#161616",
  titleColor: "#fff",
  textColor: "#fff",
  allowClose: false,
  css: `
      .popup.mergedPopup .popup-content {
        box-shadow: -2px -2px 20px -5px #bae11d;
      }
      .popup.mergedPopup .ready {
        border: none;
        border-radius: 0;
        padding: 3px 25px;
      }
      .popup.mergedPopup .popup-title {
        font-size: 28px;
      }`,
  fontSizeMultiplier: 0.7,
  loadCallback: () => {
    const gotIt = document.querySelector(".got");
    gotIt.addEventListener("click", () => {
      mergedPopup.hide();
      helpDiv.innerHTML = helpDivData[15];
    });
  },
});

// ======= info ? buttons =======
const infoBtns = document.querySelectorAll(".info-btn");
const infoDivs = document.querySelectorAll(".info");

infoBtns.forEach((e) => {
  e.addEventListener("click", (e) => {
    for (let i = 0; i < infoDivs.length; i++) {
      if (e.target.dataset.index === infoDivs[i].dataset.index) {
        infoDivs[i].style.display =
          infoDivs[i].style.display === "initial" ? "none" : "initial";
      }
    }
  });
});

// ========= Terminal =========
const tInput = document.getElementById("terminal");
const tOutput = document.getElementById("terminal-output");
let timeoutHandle = setTimeout(() => {
  tOutput.style.display = "none";
}, 4000);

const showHide = (text) => {
  clearTimeout(timeoutHandle);
  tOutput.innerHTML = text;
  tOutput.style.display = "block";
  timeoutHandle = setTimeout(() => {
    tOutput.style.display = "none";
  }, 4000);
};

let scores = {};

tInput.addEventListener("keydown", (e) => {
  if (e.key === "13") {
    e.preventDefault();
  }
});

// ======== observer ============
let observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    switch (mutation.target.dataset.task) {
      case "01": {
        handleTask01();
        break;
      }
      case "02": {
        tInput.removeEventListener("keydown", task01TerminalListener);
        handleTask02();
        break;
      }
      case "03": {
        tInput.removeEventListener("keydown", task02TerminalListener);
        handleTask03();
        break;
      }
      case "04": {
        const iframeContents =
          workArea.contentDocument || workArea.contentWindow.document;
        const cssInput = iframeContents.querySelector(".playable-css");
        cssInput.removeEventListener("keyup", task03playableCss);
        handleTask04();
        break;
      }
      case "05": {
        tInput.removeEventListener("keydown", task04TerminalListener);
        handleTask05();
        break;
      }
      case "06": {
        tInput.removeEventListener("keydown", task05TerminalListener);
        handleTask06();
        break;
      }
      case "07": {
        tInput.removeEventListener("keydown", task06TerminalListener);
        handleTask07();
        break;
      }
      case "08": {
        tInput.removeEventListener("keydown", task07TerminalListener);
        handleTask08();
        break;
      }
      case "09": {
        const iframeContents =
          workArea.contentDocument || workArea.contentWindow.document;
        const htmlInput = iframeContents.querySelector(".playable-html");
        htmlInput.removeEventListener("keyup", task08PlayableInput);
        handleTask09();
        break;
      }
      case "10": {
        const iframeContents =
          workArea.contentDocument || workArea.contentWindow.document;
        const cssInput = iframeContents.querySelector(".playable-css");
        cssInput.removeEventListener("keyup", task09PlayableCss);
        handleTask10();
        break;
      }
      case "11": {
        tInput.removeEventListener("keydown", task10TerminalListener);
        handleTask11();
        break;
      }
      case "12": {
        tInput.removeEventListener("keydown", task11TerminalListener);
        handleTask12();
        break;
      }
      case "13": {
        handleTask13();
        break;
      }
      case "14": {
        tInput.removeEventListener("keydown", task13TerminalListener);
        handleTask14();
        break;
      }
      case "15": {
        tInput.removeEventListener("keydown", task14TerminalListener);
        handleTask15();
        break;
      }
    }

    // if (mutation.target.dataset.task === "01") {
    //   handleTask01();
    // } else if (mutation.target.dataset.task === "02") {
    //   tInput.removeEventListener("keypress", task01TerminalListener);
    //   handleTask02();
    // } else if (mutation.target.dataset.task === "03") {
    //   tInput.removeEventListener("keypress", task02TerminalListener);
    //   handleTask03();
    // } else if (mutation.target.dataset.task === "04") {
    //   const iframeContents =
    //     workArea.contentDocument || workArea.contentWindow.document;
    //   const cssInput = iframeContents.querySelector(".playable-css");
    //   cssInput.removeEventListener("keyup", task03playableCss);
    //   handleTask04();
    // } else if (mutation.target.dataset.task === "05") {
    //   tInput.removeEventListener("keypress", task04TerminalListener);
    //   handleTask05();
    // } else if (mutation.target.dataset.task === "06") {
    //   tInput.removeEventListener("keypress", task05TerminalListener);
    //   handleTask06();
    // } else if (mutation.target.dataset.task === "07") {
    //   tInput.removeEventListener("keypress", task06TerminalListener);
    //   handleTask07();
    // } else if (mutation.target.dataset.task === "08") {
    //   tInput.removeEventListener("keypress", task07TerminalListener);
    //   handleTask08();
    // } else if (mutation.target.dataset.task === "09") {
    //   const iframeContents =
    //     workArea.contentDocument || workArea.contentWindow.document;
    //   const htmlInput = iframeContents.querySelector(".playable-html");
    //   htmlInput.removeEventListener("keyup", task08PlayableInput);
    //   handleTask09();
    // } else if (mutation.target.dataset.task === "10") {
    //   const iframeContents =
    //     workArea.contentDocument || workArea.contentWindow.document;
    //   const cssInput = iframeContents.querySelector(".playable-css");
    //   cssInput.removeEventListener("keyup", task09PlayableCss);
    //   handleTask10();
    // } else if (mutation.target.dataset.task === "11") {
    //   tInput.removeEventListener("keypress", task10TerminalListener);
    //   handleTask11();
    // } else if (mutation.target.dataset.task === "12") {
    //   tInput.removeEventListener("keypress", task11TerminalListener);
    //   handleTask12();
    // } else if (mutation.target.dataset.task === "13") {
    //   handleTask13();
    // } else if (mutation.target.dataset.task === "14") {
    //   tInput.removeEventListener("keypress", task13TerminalListener);
    //   handleTask14();
    // } else if (mutation.target.dataset.task === "15") {
    //   tInput.removeEventListener("keypress", task14TerminalListener);
    //   handleTask15();
    // }
  });
});
observer.observe(row01[1], { childList: true });
observer.observe(row02[1], { childList: true });
observer.observe(row03[1], { childList: true });
observer.observe(row04[1], { childList: true });
observer.observe(row05[1], { childList: true });
observer.observe(row06[1], { childList: true });

// ======= needs =========
const workingDirectory = document.querySelector(".table-wd");
const filesTable = document.querySelector(".process-t");
const workArea = document.getElementById("frame");
const stagingArea = document.querySelector(".table-sa");
const committedTable = document.querySelector(".table-c");
const remoteTable = document.querySelector(".table-gr");
const branchesDiv = document.getElementById("branches-id");
const gitStatus = document.querySelector(".git-status");
const gitLog = document.querySelector(".git-log");
const branchesImg = document.getElementById("branches-img");

const commitDate = (minus) => {
  let d = Date.now() + -minus * 24 * 3600 * 1000;
  return new Date(d).toDateString();
};

// ============ terminal input event listeners ==========
function task01TerminalListener(e) {
  if (e.key === "Enter") {
    e.preventDefault();

    let arr01 = [
      "git config --global user.name",
      "git config --global user.email",
    ];

    if (e.target.value.includes(arr01[0])) {
      userName = e.target.value.split("name")[1].trim();
      e.target.value = "";
      clearTimeout(timeoutHandle);
      showHide(`user name ${userName} was set`);
      scores.name = userName;
    }

    if (e.target.value.includes(arr01[1])) {
      userEmail = e.target.value.split("email")[1].trim();
      e.target.value = "";
      clearTimeout(timeoutHandle);
      showHide(`user email ${userEmail} was set`);
      scores.email = userEmail.trim();
    }

    if (scores.name && scores.email) {
      row01[2].appendChild(task01);
      row02[1].appendChild(task02);
    }
  }
}

function task02TerminalListener(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    if (
      e.target.value ===
      "git clone https://access-token@github.com/dev-team/project-n.git"
    ) {
      e.target.value = "";
      showHide(`cloning into 'project-n' </br> done`);
      workingDirectory.innerHTML = "index.html </br> styles.css";
      remoteTable.innerHTML = "index.html </br> styles.css";
      gitStatus.innerHTML = `On branch main </br> Your branch is up to date with 'origin/main' </br> </br> nothing to commit, working tree clean`;
      gitLog.innerHTML = `<span>commit 2102e477db45aa85fab4548a1082b2e186f877b8 (HEAD -&gt; main, origin/main, origin/HEAD)</span> </br> Author: Mr Coworker2 &lt;mr-coworker2@mail.com&gt; </br> Date: ${commitDate(
        1
      )} </br> </br> <p>fixed bug02</p> </br> <span>commit ff00116e14c285583fd98a8lea824e5d364c2b0b</span> </br> Author: Mr Coworker &lt;mr-coworker@mail.com&gt; </br> Date: ${commitDate(
        2
      )} </br> </br> <p>fixed bug01</p> </br> <span>commit 5e72fa406c5fad52aee4e9cdd4777ctbe41369a3</span> </br> Author: Mr Coworker &lt;mr-coworker@mail.com&gt; </br> Date: ${commitDate(
        5
      )} </br> </br> <p>first commit</p>`;
      branchesImg.setAttribute("src", "./img/br-01.png");
      workArea.style.display = "initial";
      row02[2].appendChild(task02);
      row03[1].appendChild(task03);
    }
  }
}

function task04TerminalListener(e) {
  if (e.key === "Enter") {
    e.preventDefault();

    if (
      e.target.value === "git add styles.css" ||
      e.target.value === "git add ."
    ) {
      e.target.value = "";
      gitStatus.innerHTML = `On branch main </br> Your branch is up to date with 'origin/main' </br> </br> Changes to be committed: </br> <div class='green'>modified: styles.css</div>`;
      stagingArea.innerHTML = "styles.css*";
      row04[2].appendChild(task04);
      row05[1].appendChild(task05);
    }
  }
}

function task05TerminalListener(e) {
  if (e.key === "Enter") {
    e.preventDefault();

    if (e.target.value === `git commit -m "column-gap corrected"`) {
      e.target.value = "";
      showHide(
        `[main 231693e] column-gap corrected </br> 1 file changed, 1 insertion(+), 1 deletion(-)`
      );
      gitStatus.innerHTML = `on branch main </br> your branch is ahead of 'origin/main' by 1 commit. </br> nothing to commit, working tree clean`;
      gitLog.innerHTML = `<span>commit 231693e6a6bdc64f5cdd2d2dfd6692b47353a2bb (HEAD -&gt; main)</span> </br> Author: ${userName} &lt;${userEmail}&gt; </br> Date: ${commitDate(
        0
      )} </br> </br> <p>column-gap corrected</p> </br>
    <span>commit 2102e477db45aa85fab4548a1082b2e186f877b8 (origin/main, origin/HEAD)</span> </br> Author: Mr Coworker2 &lt;mr-coworker2@mail.com&gt; </br> Date: ${commitDate(
      1
    )} </br> </br> <p>fixed bug02</p> </br> <span>commit ff00116e14c285583fd98a8lea824e5d364c2b0b</span> </br> Author: Mr Coworker &lt;mr-coworker@mail.com&gt; </br> Date: ${commitDate(
        2
      )} </br> </br> <p>fixed bug01</p> </br> <span>commit 5e72fa406c5fad52aee4e9cdd4777ctbe41369a3</span> </br> Author: Mr Coworker &lt;mr-coworker@mail.com&gt; </br> Date: ${commitDate(
        5
      )} </br> </br> <p>first commit</p>`;
      branchesImg.setAttribute("src", "./img/br-02.png");
      stagingArea.innerHTML = "-";
      committedTable.innerHTML = "styles.css*";
      row05[2].appendChild(task05);
      row06[1].appendChild(task06);
    }
  }
}

function task06TerminalListener(e) {
  if (e.key === "Enter") {
    e.preventDefault();

    if (e.target.value === "git push origin main") {
      e.target.value = "";
      showHide(
        `Enumerating objects: x, done </br> Counting objects: 100%, done </br> </br> ...some git metadata... </br> </br> To: https://github.com/dev-team/project-n.git </br> 2102e47..231693e main -&gt;main`
      );
      gitStatus.innerHTML = `On branch main </br> Your branch is up to date with 'origin/main' </br> </br> nothing to commit, working tree clean`;
      committedTable.innerHTML = "-";
      remoteTable.innerHTML = "index.html </br> styles.css*";
      const nextBtn = document.createElement("button");
      nextBtn.id = "next";
      nextBtn.innerText = "next";
      task06.appendChild(nextBtn);
      row06[2].appendChild(task06);
    }
  }
}

function task07TerminalListener(e) {
  if (e.key === "Enter") {
    e.preventDefault();

    if (e.target.value === "git checkout -b title-4") {
      e.target.value = "";
      showHide(`switched to branch title-4`);
      gitStatus.innerHTML = `On branch title-4 </br> nothing to commit, working tree clean`;
      branchesImg.setAttribute("src", "./img/br-04.png");
      row01[2].appendChild(task01);
      row02[1].appendChild(task02);
    } else if (e.target.value === "git branch title-4") {
      e.target.value = "";
      showHide("branch title-4 created");
      branchesImg.setAttribute("src", "./img/br-03.png");
    }

    if (e.target.value === "git checkout title-4") {
      e.target.value = "";
      showHide("switched to branch title-4");
      gitStatus.innerHTML = `On branch title-4 </br> nothing to commit, working tree clean`;
      branchesImg.setAttribute("src", "./img/br-04.png");
      row01[2].appendChild(task01);
      row02[1].appendChild(task02);
    }
  }
}

let s = {};
let added = false;

function task10TerminalListener(e) {
  if (e.key === "Enter") {
    e.preventDefault();

    if (e.target.value === "git add .") {
      e.target.value = "";
      showHide("changes staged");
      gitStatus.innerHTML = `On branch title-4 </br> Changes to be committed: </br> <div class='green'>modified: index.html</div> <div class='green'>modified: styles.css</div>`;
      added = "added";
      stagingArea.innerHTML = `index.html* </br> styles.css*`;
    }

    if (e.target.value === "git add index.html" && !added && !s.addedStyles) {
      e.target.value = "";
      showHide("changes staged");
      gitStatus.innerHTML = `On branch title-4 </br> Changes to be committed: </br> <div class='green'>modified: index.html</div> </br> changes not staged for commit: </br> <div>modified: styles.css</div>`;
      s.addedIndex = "index";
      stagingArea.innerHTML = `index.html*`;
    } else if (
      e.target.value === "git add index.html" &&
      !added &&
      s.addedStyles
    ) {
      e.target.value = "";
      showHide("changes staged");
      gitStatus.innerHTML = `On branch title-4 </br> Changes to be committed: </br> <div class='green'>modified: styles.css</div><div class='green'>modified: index.html</div>`;
      added = "added";
      stagingArea.innerHTML = `styles.css* </br> index.html*`;
    } else if (added && e.target.value === "git add index.html") {
      e.target.value = "";
      showHide("changes staged");
    } else if (e.target.value === "git add index.html" && s.addedIndex) {
      e.target.value = "";
      showHide("changes staged");
    }

    if (e.target.value === "git add styles.css" && !added && !s.addedIndex) {
      e.target.value = "";
      showHide("changes staged");
      gitStatus.innerHTML = `On branch title-4 </br> Changes to be committed: </br> <div class='green'>modified: styles.css</div> </br> changes not staged for commit: </br> <div>modified: index.html</div>`;
      s.addedStyles = "styles";
      stagingArea.innerHTML = `styles.css*`;
    } else if (
      e.target.value === "git add styles.css" &&
      !added &&
      s.addedIndex
    ) {
      e.target.value = "";
      showHide("changes staged");
      gitStatus.innerHTML = `On branch title-4 </br> Changes to be committed: </br> <div class='green'>modified: index.html</div><div class='green'>modified: styles.css</div>`;
      added = "added";
      stagingArea.innerHTML = `index.html* </br> styles.css*`;
    } else if (added && e.target.value === "git add styles.css") {
      e.target.value = "";
      showHide("changes staged");
    } else if (e.target.value === "git add styles.css" && s.addedStyles) {
      e.target.value = "";
      showHide("changes staged");
    }

    if (
      added === "added" &&
      e.target.value === `git commit -m "title 4 added"`
    ) {
      e.target.value = "";
      showHide(
        "[title-4 6ce46a0] title 4 added </br> 2 files changed, 2 insertions(+), 0 deletion(-)"
      );
      gitStatus.innerHTML = `On branch title-4 </br> nothing to commit, working tree clean`;
      gitLog.innerHTML = `
        <span>commit 6ce46a0f118ecab12c064780d1245b509ecf17ad (HEAD -&gt; title-4)</span>
        </br> Author: ${userName} &lt;${userEmail}&gt; </br> Date: ${commitDate(
        0
      )} </br> </br> <p>title 4 added</p> </br>
        <span>commit 231693e6a6bdc64f5cdd2d2dfd6692b47353a2bb (origin/main, origin/HEAD, main)</span> </br> Author: ${userName} &lt;${userEmail}&gt; </br> Date: ${commitDate(
        1
      )} </br> </br> <p>column-gap corrected</p> </br>
      <span>commit 2102e477db45aa85fab4548a1082b2e186f877b8 (origin/main, origin/HEAD)</span> </br> Author: Mr Coworker2 &lt;mr-coworker2@mail.com&gt; </br> Date: ${commitDate(
        2
      )} </br> </br> <p>fixed bug02</p> </br> <span>commit ff00116e14c285583fd98a8lea824e5d364c2b0b</span> </br> Author: Mr Coworker &lt;mr-coworker@mail.com&gt; </br> Date: ${commitDate(
        3
      )} </br> </br> <p>fixed bug01</p> </br> <span>commit 5e72fa406c5fad52aee4e9cdd4777ctbe41369a3</span> </br> Author: Mr Coworker &lt;mr-coworker@mail.com&gt; </br> Date: ${commitDate(
        6
      )} </br> </br> <p>first commit</p>`;
      stagingArea.innerHTML = "-";
      committedTable.innerHTML = `index.html* </br> styles.css*`;
      branchesImg.setAttribute("src", "./img/br-05.png");
      row04[2].appendChild(task04);
      row05[1].appendChild(task05);
    } else if (!added) {
      showHide("stage changes first");
    }
  }
}

function task11TerminalListener(e) {
  if (e.key === "Enter") {
    e.preventDefault();

    if (e.target.value === `git push origin -u title-4`) {
      e.target.value = "";
      showHide(
        `Enumerating objects: x, done </br> Counting objects: 100%, done </br> </br> ...some git metadata... </br> </br> To: https://github.com/dev-team/project-n.git </br> [new branch] title-4 -&gt;title-4 </br> branch 'title-4' set up to track 'origin/title-4'`
      );
      committedTable.innerHTML = "-";
      remoteTable.innerHTML = "index.html* </br> styles.css*";
      row05[2].appendChild(task05);
      row06[1].appendChild(task06);
    }
  }
}

function task13TerminalListener(e) {
  if (e.key === "Enter") {
    e.preventDefault();

    if (e.target.value === `git checkout main`) {
      e.target.value = "";
      showHide(
        `switched to main branch </br> Your branch is up to date with 'origin/main'`
      );
      committedTable.innerHTML = "-";
      gitStatus.innerHTML = `On branch main </br> Your branch is up to date with 'origin/main' </br> </br> nothing to commit, working tree clean`;
      gitLog.innerHTML = `<span>commit 231693e6a6bdc64f5cdd2d2dfd6692b47353a2bb (HEAD -&gt; main)</span> </br> Author: ${userName} &lt;${userEmail}&gt; </br> Date: ${commitDate(
        0
      )} </br> </br> <p>column-gap corrected</p> </br>
  <span>commit 2102e477db45aa85fab4548a1082b2e186f877b8 (origin/main, origin/HEAD)</span> </br> Author: Mr Coworker2 &lt;mr-coworker2@mail.com&gt; </br> Date: ${commitDate(
    1
  )} </br> </br> <p>fixed bug02</p> </br> <span>commit ff00116e14c285583fd98a8lea824e5d364c2b0b</span> </br> Author: Mr Coworker &lt;mr-coworker@mail.com&gt; </br> Date: ${commitDate(
        2
      )} </br> </br> <p>fixed bug01</p> </br> <span>commit 5e72fa406c5fad52aee4e9cdd4777ctbe41369a3</span> </br> Author: Mr Coworker &lt;mr-coworker@mail.com&gt; </br> Date: ${commitDate(
        5
      )} </br> </br> <p>first commit</p>`;
      branchesImg.setAttribute("src", "./img/br-06.png");
      row01[2].appendChild(task01);
      row02[1].appendChild(task02);
    }
  }
}

function task14TerminalListener(e) {
  if (e.key === "Enter") {
    e.preventDefault();

    if (e.target.value === "git fetch origin") {
      e.target.value = "";
      showHide(
        `remote: Enumerating objects: x, done. </br> </br> ... some git metadata... </br> </br> From https://github.com/dev-team/project-n.git </br> 231693e..bf350d main -&gt; origin/main`
      );
      gitStatus.innerHTML = `On branch main </br> Your branch is behind 'origin/main' by 2 commits, and can be fast-forwarded. </br> </br> nothing to commit, working tree clean`;
      row02[2].appendChild(task02);
      row03[1].appendChild(task03);
    }
  }
}

function task15TerminalListener(e) {
  if (e.key === "Enter") {
    e.preventDefault();

    if (e.target.value === `git merge origin/main`) {
      e.target.value = "";
      showHide(`Updating 2316693e..bf350de </br> `);
      gitStatus.innerHTML = `On branch main </br> Your branch is up to date with 'origin/main' </br> </br> nothing to commit, working tree clean`;
      gitLog.innerHTML = `
      <span>commit bf350def520d17cfb458672a13e9759defd3e8d5 (HEAD -&gt; main)</span> </br> Mr Coworker &lt;mr-coworker@mail.com&gt; </br> Date: ${commitDate(
        0
      )} </br> </br> <p>updated styles.css</p> </br>
        
        <span>commit 750fe407014170bcb790eee70808d84dd07441c9</span>
        </br> Merge: 231693e 6ce46a0
        </br> Author: ${userName} &lt;${userEmail}&gt; </br> Date: ${commitDate(
        0
      )} </br> </br> <p>Merge pull request #1 from ${userName}</p> </br>
          
          <span>commit 6ce46a0f118ecab12c064780d1245b509ecf17ad </span>
          </br> Author: ${userName} &lt;${userEmail}&gt; </br> Date: ${commitDate(
        0
      )} </br> </br> <p>title 4 added</p> </br>
            
            <span>commit 231693e6a6bdc64f5cdd2d2dfd6692b47353a2bb (origin/main, origin/HEAD, main)</span> </br> Author: ${userName} &lt;${userEmail}&gt; </br> Date: ${commitDate(
        1
      )} </br> </br> <p>column-gap corrected</p> </br>
              
      <span>commit 2102e477db45aa85fab4548a1082b2e186f877b8 (origin/main, origin/HEAD)</span> </br> Author: Mr Coworker2 &lt;mr-coworker2@mail.com&gt; </br> Date: ${commitDate(
        2
      )} </br> </br> <p>fixed bug02</p> </br> 
                
      <span>commit ff00116e14c285583fd98a8lea824e5d364c2b0b</span> </br> Author: Mr Coworker &lt;mr-coworker@mail.com&gt; </br> Date: ${commitDate(
        3
      )} </br> </br> <p>fixed bug01</p> </br>
                  
      <span>commit 5e72fa406c5fad52aee4e9cdd4777ctbe41369a3</span> </br> Author: Mr Coworker &lt;mr-coworker@mail.com&gt; </br> Date: ${commitDate(
        6
      )} </br> </br> <p>first commit</p>`;

      branchesImg.setAttribute("src", "./img/br-07.png");
      const iframeContents =
        workArea.contentDocument || workArea.contentWindow.document;
      iframeContents.querySelector(
        ".playable-css"
      ).value = `.box {display: flex; column-gap: 20px; justify-content: center; text-transform: uppercase; color: blue;}`;
      row03[2].appendChild(task03);
      row04[1].appendChild(task04);
      mergedPopup.show();
    }
  }
}

// ======= task 01 set user name and email ========
const handleTask01 = () => {
  tInput.addEventListener("keydown", task01TerminalListener);
};

// ======= task 02 git clone ========
const handleTask02 = () => {
  helpDiv.innerHTML = helpDivData[1];
  tInput.addEventListener("keydown", task02TerminalListener);
};

// ========== task 03 set column-gap ===========
function task03playableCss(e) {
  gitStatus.innerHTML = `On branch main </br> Your branch is up to date with 'origin/main' </br> </br> Changes not staged for commit: </br> <div>modified: styles.css</div> </br> no changes added to commit`;

  if (e.target.value.includes("column-gap: 20px;")) {
    window.scroll({ top: 0, behavior: "smooth" });
    row03[2].appendChild(task03);
    row04[1].appendChild(task04);
  }
}

const handleTask03 = () => {
  helpDiv.innerHTML = helpDivData[2];
  const iframeContents =
    workArea.contentDocument || workArea.contentWindow.document;
  const cssInput = iframeContents.querySelector(".playable-css");
  cssInput.addEventListener("keyup", task03playableCss);
};

// ======== task 04 stage changes ==========
const handleTask04 = () => {
  helpDiv.innerHTML = helpDivData[3];
  tInput.addEventListener("keydown", task04TerminalListener);
};

// ======== task 05 commit changes ==========
const handleTask05 = () => {
  helpDiv.innerHTML = helpDivData[4];
  tInput.addEventListener("keydown", task05TerminalListener);
};

// ======== task 06 push changes ==========
const handleTask06 = () => {
  helpDiv.innerHTML = helpDivData[5];
  tInput.addEventListener("keydown", task06TerminalListener);
  const nextBtn = document.getElementById("next");
  nextBtn.addEventListener("click", () => {
    part1DonePopup.show();
  });
};

// ======== task 07 create branch title-4 ==========
const handleTask07 = () => {
  helpDiv.innerHTML = helpDivData[6];
  tInput.addEventListener("keydown", task07TerminalListener);
};

// ======== task 08 new title-4 div ==========
function task08PlayableInput(e) {
  gitStatus.innerHTML = `On branch title-4 </br> Changes not staged for commit: </br> <div>modified: index.html</div> </br> no changes added to commit`;

  if (e.target.value.includes(`<div>title 4</div>`)) {
    window.scroll({ top: 0, behavior: "smooth" });
    row02[2].appendChild(task02);
    row03[1].appendChild(task03);
  }
}

const handleTask08 = () => {
  helpDiv.innerHTML = helpDivData[7];

  const iframeContents =
    workArea.contentDocument || workArea.contentWindow.document;
  const htmlInput = iframeContents.querySelector(".playable-html");
  htmlInput.addEventListener("keyup", task08PlayableInput);
};

// ======== task 09 uppercase ==========
function task09PlayableCss(e) {
  gitStatus.innerHTML = `On branch title-4 </br> Changes not staged for commit: </br> <div>modified: index.html</div> <div>modified: styles.css</div> </br> no changes added to commit`;

  if (e.target.value.includes(`text-transform: uppercase;`)) {
    window.scroll({ top: 0, behavior: "smooth" });
    row03[2].appendChild(task03);
    row04[1].appendChild(task04);
  }
}

const handleTask09 = () => {
  helpDiv.innerHTML = helpDivData[8];

  const iframeContents =
    workArea.contentDocument || workArea.contentWindow.document;
  const cssInput = iframeContents.querySelector(".playable-css");
  cssInput.addEventListener("keyup", task09PlayableCss);
};

// ======== task 10 new title-4 div ==========
const handleTask10 = () => {
  helpDiv.innerHTML = helpDivData[9];
  tInput.addEventListener("keydown", task10TerminalListener);
};

// ======== task 11 push title-4 branch ==========
const handleTask11 = () => {
  helpDiv.innerHTML = helpDivData[10];
  tInput.addEventListener("keydown", task11TerminalListener);
};

// ======== task 12 create pull request ==========
const handleTask12 = () => {
  helpDiv.innerHTML = helpDivData[11];
  const pullRequestBtn = document.getElementById("pull-request");
  pullRequestBtn.addEventListener("click", () => {
    pullRequestPopup.show();
  });
};

// ======== task 13 switch to main ==========
const handleTask13 = () => {
  helpDiv.innerHTML = helpDivData[12];
  tInput.addEventListener("keydown", task13TerminalListener);
};

// ======== task 14 git fetch ==========
const handleTask14 = () => {
  helpDiv.innerHTML = helpDivData[13];
  tInput.addEventListener("keydown", task14TerminalListener);
};

// ======== task 15 git merge ==========
const handleTask15 = () => {
  helpDiv.innerHTML = helpDivData[14];
  tInput.addEventListener("keydown", task15TerminalListener);
};

// // ======== task 16 git merge ==========
// const handleTask16 = () => {
//   helpDiv.innerHTML = helpDivData[15];
//   tInput.addEventListener("keypress", task16TerminalListener);
// };
