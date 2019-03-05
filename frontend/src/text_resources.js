import LocalizedStrings from "react-localization";

let LOCALIZE = new LocalizedStrings({
  en: {
    //Main Tabs
    mainTabs: {
      homeTabTitle: "Home",
      prototypeTabTitle: "Prototype",
      statusTabTitle: "Status"
    },

    //Home Page
    homePage: {
      title: "The Public Service Commission's Competency Assessment Tool",
      welcomeMsg: "Welcome to the Compotency Assessment Tool.",
      description:
        "Code for Canada and PSC are working on this tool to help assess managerial canadiates for the federal public service. It is in the alpha phase which means it is currently going through product testing and is subject to change."
    },

    //Prototype Page
    prototypePage: {
      title: "Prototype",
      welcomeMsg: "This page will be used to test out experimental UIs.",
      startEmibSampleTest: "Start eMIB Sample Test"
    },

    //Status Page
    statusPage: {
      title: "CAT Status",
      logo: "Thunder CAT Logo",
      welcomeMsg:
        "Internal status page to quickly determine the status / health of the Compotency Assessment Tool.",
      gitHubRepoBtn: "GitHub Repository",
      serviceStatusTable: {
        title: "Service Status",
        frontendDesc: "Front end application built and serving successfully",
        backendDesc: "Back end application completing API requests successfully",
        databaseDesc: "Database completing API requests sccessfully"
      },
      systemStatusTable: {
        title: "System Status",
        javaScript: "JavaScript",
        browsers: "IE 9+, Chrome, Firefox",
        screenResolution: "Screen resolution minimum of 800 x 600"
      }
    },

    //eMIB Test
    emibTest: {
      //Home Page
      homePage: {
        testTitle: "The eMIB",
        welcomeMsg: "Welcome to the eMIB Sample Test"
      },

      //HowTo Page
      howToPage: {
        title: "HowTo Page",
        emailInstructions: "Email Instuctions",
        taskInstructions: "Task Instuctions",
        overview: {
          title: "Overview",
          description:
            'The electronic managerial Inbox (e-MIB) simulates an email inbox in which you will respond to a series of emails depicting situations typically encountered by managers in the federal public service. These situations will provide you with the opportunity to demonstrate the Key Leadership Competencies, outlined in "Evaluation".',
          aboutSection: {
            title: "About the sample test",
            para1:
              "The sample test has been designed to provide you with the opportunity to familiarize yourself with:",
            bullet1:
              "the components of the test (e.g., instructions, background information, email inbox, notepad);",
            bullet2: "the features of the test interface (e.g., menu bars, buttons); and",
            bullet3: "examples of emails.",
            para2:
              "The background information, which includes a description of the organisation, your role, your employees, colleagues and management team, as well as the emails presented are examples. They are not intended to reflect the length nor the level of difficulty of the real test. The background information and the number of emails presented are more extensive in the real test."
          }
        },
        tipsOnTest: {
          title: "Tips on taking the e-MIB",
          description:
            'The e-MIB presents you with situations that will give you the opportunity to demonstrate the Key Leadership Competencies, outlined in "Evaluation". Here are some tips that will help you provide assessors with the information they need to evaluate your performance on those competencies:',
          bullet1:
            "Answer all the questions asked in the emails you receive. This will ensure that you have used all the opportunities designed to allow you to demonstrate the competencies.",
          bullet2:
            "Provide initial thoughts and recommendations supported by your rationale where appropriate. You can then note other information you would need to reach a final decision.",
          bullet3:
            "Use only the information provided in the emails and the background information. Do not make any inferences based on the culture of your own organization. Avoid making assumptions that are not reasonably supported by either the background information or the emails.",
          bullet4: "You can answer the emails in any order you want.",
          bullet5: "You are responsible for managing your own time."
        },
        testInstructions: {
          title: "Test instructions",
          para1:
            "First, read the background information which describes your position and the fictitious organization in which you work. Then proceed to the inbox where you can read the emails you received and take actions to respond to them as though you were a manager within the fictitious organization.",
          step1Section: {
            title: "Step 1 - Responding to emails",
            description:
              "You can respond to the emails you receive in two ways: by sending an email or by adding tasks to your task list. A description of both methods of responding is presented below, followed by examples.",
            part1: {
              title: "1. Sending an email",
              para1:
                "You can send an email in response to one you received in your inbox. The written responses should reflect how you would respond as a manager.",
              para2:
                "You can send an email using the following options: reply, reply all, forward, or write a new email. If you choose to write a new email, you will have access to a directory with all of your contacts. You can write as many emails as you like in response to an email you received."
            },
            part2: {
              title: "2. Adding a task to the task list",
              para1:
                "In addition to, or instead of, responding to an email you can add a task to the task list. A task is an action that you intend to take to address a situation presented in the emails. Example tasks could include planning a meeting or asking a colleague for information. You should provide enough information in your task description to ensure it is clear which situation you are addressing. You should also specify what actions you plan to take, and with whom. You can add, delete, or edit tasks on the task list."
            },
            part3: {
              title: "How to choose a method of responding",
              para1:
                "There are no right or wrong ways to respond. When responding to an email, you can:",
              bullet1: "send an email (or emails), or",
              bullet2: "add a task (or tasks) to your task list, or",
              bullet3: "do both.",
              para2:
                "You will be evaluated on the content of your responses, and not on your method of responding (i.e. whether you responded by sending an email and/or adding a task to your task list). That being said, answers need to be detailed and clear enough for assessors to evaluate how you are addressing the situation. For example, if you plan to schedule a meeting, you’ll need to specify what will be discussed at that meeting.",
              para3:
                "In responding to an email you received, if you decide to send an email and to add a task to your task list, you do not need to repeat the same information in both places. For example, if you mention that you will schedule a meeting with a co-worker in an email, you do not also need to add that meeting to your task list."
            }
          },
          step2Section: {
            title: "Step 2 - Adding Reasons for Action (optional)",
            description:
              "After sending an email or adding a task, you will be able to provide a justification in the “Reasons for Action” section. Here, you can explain why you took a specific action in response to a situation if you feel the need to provide additional information. Filling out the Reasons for Action section is optional. Note that you may decide to add Reasons for Action when responding to some emails and not others. This also applies for tasks in the task list. In addition, if you add Reasons for Action, you may choose to clarify only certain actions while others may not require additional explanations.",
            example: {
              title: "Example of an email and ways of responding",
              part1Title: "Original email",
              part1Description:
                "Two options are provided below to demonstrate different methods of responding to the email. As previously mentioned, you can choose one of the two options presented or a combination of the two. Note that the responses provided were not evaluated for how well they demonstrate the competency targeted in the email. They are presented here only to illustrate how to use each of the two ways of responding.",
              part2Title: "Option 1 – Sending an email with Reasons for Action",
              part3Title: "Option 2 – Adding tasks to task list with Reasons for Action"
            }
          }
        },
        evaluation: {
          title: "Evaluation",
          bullet1:
            "You will be scored on the responses contained in your emails, task list and Reasons for Action. Information left in your Notepad will not be evaluated.",
          bullet2:
            "Both the actions you take and the explanations you give will be considered when evaluating your performance on each of the Key Leadership Competencies (described below). You will be assessed on the extent to which your actions demonstrate the ",
          bullet2Link: "Key Leadership Competencies",
          bullet3:
            "Your actions will be rated on effectiveness. Effectiveness is measured by whether your actions would have a positive or a negative impact in resolving the situations presented, and how widespread that impact would be.",
          bullet4:
            "Your responses will also be evaluated for how well they meet the organizational objectives presented in the background information.",
          bullet5:
            "You will not be scored on your writing. No points will be deducted for spelling, grammar, punctuation errors or for incomplete sentences. However, your writing will need to be clear enough to ensure that the assessors understand which situation you are responding to and your main points.",
          keyLeadershipCompetenciesSection: {
            title: "Key Leadership Competencies",
            para1Title: "Create Vision and Strategy: ",
            para1:
              "Managers help to define the future and chart a path forward. To do so, they take into account context. They leverage their knowledge and seek and integrate information from diverse sources to implement concrete activities. They consider different perspectives and consult as needed. Managers balance organizational priorities and improve outcomes.",
            para2Title: "Mobilize People: ",
            para2:
              "Managers inspire and motivate the people they lead. They manage their employee’s performance, provide constructive and respectful feedback to encourage and enable performance excellence. They lead by example, setting goals for themselves that are more demanding than those that they set for others.",
            para3Title: "Uphold Integrity and Respect: ",
            para3:
              "Managers exemplify ethical practices, professionalism and personal integrity, acting in the interest of Canada and Canadians. They create respectful, inclusive and trusting work environments where sound advice is valued. They encourage the expression of diverse opinions and perspectives, while fostering collegiality.",
            para4Title: "Collaborate with Partners and Stakeholders: ",
            para4:
              "Managers are deliberate and resourceful about seeking a wide spectrum of perspectives. In building partnerships, they manage expectations and aim to reach consensus. They demonstrate openness and flexibility to improve outcomes and bring a whole-of-organization perspective to their interactions. Managers acknowledge the role of partners in achieving outcomes.",
            para5Title: "Promote Innovation and Guide Change: ",
            para5:
              "Managers create an environment that supports bold thinking, experimentation and intelligent risk taking. When implementing change, managers maintain momentum, address resistance and anticipate consequences. They use setbacks as a valuable source of insight and learning.",
            para6Title: "Achieve Results: ",
            para6:
              "Managers ensure that they meet team objectives by managing resources. They anticipate, plan, monitor progress and adjust as needed. They demonstrate awareness of the context when making decisions. Managers take personal responsibility for their actions and outcomes of their decisions."
          }
        }
      },

      //Background Page
      backgroundPage: {
        title: "Background Page",
        orgChart: "Org Chart",
        Scenarios: "Scenarios"
      },

      //Inbox Page
      inboxPage: {
        title: "Inbox",
        taskList: "Tasks List",
        notePad: "NotePad",
        textTools: "Text Tools",
        emailFeatures: "Email Features",
        progressSaved: "Progress Saved",
        timer: "Timer"
      },

      //Confirmation Page
      confirmationPage: {
        submissionConfirmed: "Submission Confirmed"
      },

      //Test tabs
      tabs: {
        instructionsTabTitle: "Instructions",
        backgroundTabTitle: "Background",
        inboxTabTitle: "Inbox"
      }
    },

    //Screen Reader
    ariaLabel: {
      mainMenu: "main-menu",
      languageToggleBtn: "language-toggle-button"
    },

    //Commons
    commons: {
      psc: "Public Service Commission",
      nextButton: "Next",
      backButton: "Back",
      startTest: "Start test",
      submitTestButton: "Submit test",
      exitTest: "Exit Test",
      passStatus: "Pass",
      failStatus: "Fail",
      enabled: "Enabled",
      disabled: "Disabled",
      backToTop: "Back to top"
    }
  },

  fr: {
    //Main Tabs
    mainTabs: {
      homeTabTitle: "Accueil",
      prototypeTabTitle: "Prototype",
      statusTabTitle: "Statut"
    },

    //Home Page
    homePage: {
      title:
        "Outil d'évaluation des compétences de la Commission de la fonction publique du Canada",
      welcomeMsg: "Bienvenue dans l'outil d'évaluation des compétences.",
      description:
        "FR Code for Canada and PSC are working on this tool to help assess managerial canadiates for the federal public service. It is in the alpha phase which means it is currently going through product testing and is subject to change."
    },

    //Prototype Page
    prototypePage: {
      title: "Prototype",
      welcomeMsg: "Cette page sera utilisée pour tester des interfaces utilisateur expérimentales.",
      startEmibSampleTest: "Démarrer le test pratique eMIB"
    },

    //Status Page
    statusPage: {
      title: "Statut de OEC",
      logo: "Logo Thunder CAT",
      welcomeMsg:
        "Page de statut interne afin de déterminer rapidement l'état / la santé de l'Outil d'Évaluation des Compétences.",
      gitHubRepoBtn: "Répertoire GitHub",
      serviceStatusTable: {
        title: "Statut des services",
        frontendDesc: "La Face avant de l'application est construite et utilisée avec succès",
        backendDesc: "La Face arrière de l'application réussit les demandes API avec succès",
        databaseDesc: "La Base de données réussit les demandes API avec succès"
      },
      systemStatusTable: {
        title: "Statut du système",
        javaScript: "JavaScript",
        browsers: "IE 9+, Firefox, Chrome",
        screenResolution: "Résolution d'écran minimum de 800 x 600"
      }
    },

    //eMIB Test
    emibTest: {
      //Home Page
      homePage: {
        testTitle: "La BRG-e",
        welcomeMsg: "Bienvenu dans le test pratique de eMIB"
      },

      //HowTo Page
      howToPage: {
        title: "Page 'How To'",
        emailInstructions: "Instructions pour les courriel",
        taskInstructions: "Instuctions pour les tâches",
        overview: {
          title: "Aperçu général",
          description:
            "La boîte de réception pour la gestion électronique (BRG-e) simule d’une boîte de courriel dans laquelle vous allez répondre à des courriels décrivant des situations qui sont typiquement vécues par les gestionnaires de la fonction publique. Ces situations vous donneront l’occasion de démontrer les compétences clés en leadership, décrit dans «Évaluation».",
          aboutSection: {
            title: "À propos de l’échantillon de test",
            para1:
              "Cet échantillon de test a été conçu pour vous donner l’occasion de vous familiariser avec :",
            bullet1:
              "les volets du test (p. ex., instructions, information contextuelle, boîte de réception de courriel, bloc-notes) ;",
            bullet2:
              "les fonctionnalités de l’interface du test (p. ex., barres de menu, boutons) ; et",
            bullet3: "des exemples de courriels.",
            para2:
              "L’information contextuelle, laquelle inclut une description de l’organisation, de votre rôle de vos employées, de vos collègues et de l’équipe de gestion ainsi que les courriels auxquels vous devez répondre sont présentés à titre d’exemples. Ils ne sont pas destinés à refléter la longueur ou le niveau de difficulté du test réel. L’information contextuelle et le nombre de courriels présentés sont plus vastes dans le test réel."
          }
        },
        tipsOnTest: {
          title: "Conseils pour répondre à la BRG-e",
          description:
            "La BRG-e vous présente des situations qui vous donneront l’occasion de démontrer les compétences clés en matière de leadership, décrit dans «Évaluation». Voici quelques conseils qui vous aideront à fournir aux évaluateurs l’information dont ils ont besoin pour évaluer votre rendement par rapport à ces compétences :",
          bullet1:
            "Répondez à toutes les questions posées dans les courriels que vous recevez. Vous profiterez ainsi de toutes les occasions de démontrer les compétences recherchées.",
          bullet2:
            "Présentez vos recommandations et réflexions préliminaires accompagnées d’une justification, s’il y a lieu. Vous pouvez ensuite noter les autres renseignements dont vous auriez besoin pour en arriver à une décision.",
          bullet3:
            "Utilisez uniquement l’information fournie dans les courriels et les informations contextuelles. Ne tirez aucune conclusion fondée sur la culture de votre propre organisation. Évitez de faire des suppositions qui ne sont pas raisonnablement corroborées par l’information contextuelle ou les courriels.",
          bullet4: "Vous pouvez répondre aux courriels dans l’ordre que vous désirez.",
          bullet5: "Vous êtes responsable de la gestion de votre temps."
        },
        testInstructions: {
          title: "Instructions du test",
          para1:
            "Dans un premier temps, lisez l’information contextuelle, laquelle décrit votre poste et l’organisation fictive dans laquelle vous travaillez. Ensuite, passez à la boîte de réception pour lire les courriels que vous avez reçus et prendre des dispositions pour répondre à ces courriels comme si vous étiez un gestionnaire dans cette organisation fictive.",
          step1Section: {
            title: "Étape 1 — Répondre aux courriels",
            description:
              "Vous pouvez répondre aux courriels que vous avez reçus de deux façons : en envoyant un courriel ou en ajoutant une tâche à votre liste de tâches. Les deux méthodes de réponse sont décrites ci-dessous, suivies d’exemples.",
            part1: {
              title: "1. Envoyer un courriel",
              para1:
                "Vous pouvez envoyer un courriel pour répondre à celui que vous avez reçu dans votre boîte de réception. Vos réponses écrites devraient représenter ce que vous feriez en tant que gestionnaire.",
              para2:
                "Vous pouvez envoyer un courriel en utilisant les fonctions suivantes : répondre, répondre à tous, transférer ou rédiger un nouveau courriel. Si vous choisissez de rédiger un nouveau courriel, vous aurez accès à un répertoire de noms et d’adresses de courriel. Vous pouvez écrire autant de courriels que vous le souhaitez pour répondre à un courriel que vous avez reçu."
            },
            part2: {
              title: "2. Ajouter une tâche à la liste de tâches",
              para1:
                "En plus de répondre à un courriel, ou au lieu d’y répondre, vous pouvez ajouter des tâches à la liste de tâches. Une tâche représente une mesure que vous comptez prendre pour gérer une situation présentée dans les courriels. Voici des exemples de tâches : planifier une rencontre ou communiquer avec un collègue afin d’obtenir de l’information. Assurez-vous de fournir suffisamment d’information dans votre description de la tâche pour que nous sachions à quelle situation vous répondez. Vous devez également préciser quelles mesures vous envisagez prendre et qui devra participer à cette tâche. Vous pouvez ajouter, supprimer ou modifier vos tâches dans la liste des tâches."
            },
            part3: {
              title: "Comment choisir une méthode de réponse",
              para1:
                "Il n’y a pas de bonne ou de mauvaise façon de répondre. En répondant à un courriel, vous pouvez :",
              bullet1: "envoyer un ou des courriels, ou",
              bullet2: "ajouter une ou des tâches à votre liste de tâches, ou",
              bullet3: "faire les deux.",
              para2:
                "Vous serez évalué en fonction du contenu de vos réponses, et non en fonction des méthodes de réponses choisies (c.-à-d., envoi de courriels et ajout d’une tâche à une liste de tâches à accomplir). Cela dit, vos réponses doivent être suffisamment détaillées et claires pour permettre aux évaluateurs d’avoir une bonne compréhension des mesures que vous avez prises pour gérer la situation. Par exemple, si vous comptez organiser une réunion, vous devrez préciser les points qui y seront discutés.",
              para3:
                "Si vous décidez d’envoyer un courriel et d’ajouter une tâche à votre liste de tâches en répondant à un courriel que vous avez reçu, vous n’avez pas à répéter la même information aux deux endroits. Par exemple, si vous mentionnez dans un courriel que vous organiserez une réunion avec un collègue, vous n’avez pas à ajouter cette réunion à votre liste de tâches."
            }
          },
          step2Section: {
            title: "Étape 2 — Ajouter une justification des mesures prises (facultatif)",
            description:
              "Après avoir envoyé un courriel ou ajouté une tâche, vous avez la possibilité d’expliquer votre raisonnement dans la section « Justification des mesures prises ». Vous pouvez expliquer dans cette section pourquoi vous avez pris une ou des mesures pour gérer la situation présentée dans le courriel en question. Remplir la section « Justification des mesures prises » est facultatif. Notez que vous pouvez décider d’ajouter une « Justification des mesures prises » lorsque vous répondez à certains courriels, mais pas pour d’autres. Ceci est également vrai pour les tâches dans la liste de tâches. De plus, si vous ajoutez une « Justification des mesures prises », vous pouvez choisir de justifier certaines des mesures prises tandis que d’autres ne nécessitent pas d’explications supplémentaires.",
            example: {
              title: "Exemple de courriel et façons de répondre",
              part1Title: "Courriel original",
              part1Description:
                "Vous trouverez ci-dessous deux façons différentes de répondre au courriel. Comme il est mentionné précédemment, vous pouvez choisir l’une ou l’autre des deux options présentées ou combiner les deux. Veuillez noter que les réponses fournies n’ont pas été évaluées pour déterminer la mesure dans laquelle elles démontrent la compétence ciblée dans le courriel. Elles sont présentées ici uniquement pour illustrer comment utiliser chacune des deux façons de répondre.",
              part2Title:
                "Option 1 – Envoyer un courriel renfermant une justification des mesures prises",
              part3Title:
                "Option 2 – Ajouter des tâches à la liste de tâches et l’accompagner d’une justification des mesures prises"
            }
          }
        },
        evaluation: {
          title: "Évaluation",
          bullet1:
            "Vous serez évalués en fonction des réponses aux courriels, des tâches et des justifications des mesures prises. Le contenu du bloc-notes ne sera pas évalué.",
          bullet2:
            "Les mesures que vous prenez et les explications que vous donnez seront prises en compte dans l’évaluation de votre rendement pour chacune des compétences clés en leadership (décrites ci-dessous). Vous serez évalué sur la façon dont les mesures que vous avez prises démontrent les ",
          bullet2Link: "compétences clés en leadership",
          bullet3:
            "Les mesures que vous avez prises seront évaluées quant à leur efficacité. Le niveau d’efficacité d’une mesure prise est déterminé par l’effet, positif ou négatif, que cette mesure aura sur la résolution des situations présentées dans les courriels de même que par l’étendue de cet effet.",
          bullet4:
            "Vos réponses seront également évaluées en fonction de leur contribution à l’atteinte des objectifs organisationnels, lesquels sont présentés dans l’information contextuelle.",
          bullet5:
            "Vous ne serez pas évalué sur votre rédaction. Aucun point ne sera enlevé pour les fautes d’orthographe, de grammaire, de ponctuation ou pour les phrases incomplètes. Votre rédaction devra toutefois être suffisamment claire pour que les évaluateurs comprennent la situation que vous traitez et vos principaux arguments.",
          keyLeadershipCompetenciesSection: {
            title: "Compétences clés en leadership",
            para1Title: "Créer une vision et une stratégie : ",
            para1:
              "Les gestionnaires contribuent à définir l’avenir et à tracer la voie à suivre. Pour ce faire, ils tiennent compte du contexte. Ils tirent parti de leurs connaissances. Ils obtiennent et intègrent de l’information provenant de diverses sources pour la mise en œuvre d’activités concrètes. Ils considèrent divers points de vue et consultent d’autres personnes, au besoin. Les gestionnaires assurent l’équilibre entre les priorités organisationnelles et contribuent à améliorer les résultats.",
            para2Title: "Mobiliser les personnes : ",
            para2:
              "Les gestionnaires inspirent et motivent les personnes qu’ils dirigent. Ils gèrent le rendement de leurs employés et leur offrent de la rétroaction constructive et respectueuse pour encourager et rendre possible l’excellence en matière de rendement. Ils dirigent en donnant l’exemple et se fixent des objectifs personnels qui sont plus exigeants que ceux qu’ils établissent pour les autres.",
            para3Title: "Préserver l’intégrité et le respect : ",
            para3:
              "Les gestionnaires donnent l’exemple sur le plan des pratiques éthiques, du professionnalisme et de l’intégrité personnelle, en agissant dans l’intérêt du Canada, des Canadiens et des Canadiennes. Ils créent des environnements de travail inclusifs, empreints de respect et de confiance, où les conseils judicieux sont valorisés. Ils encouragent les autres à faire part de leurs points de vue, tout en encourageant la collégialité.",
            para4Title: "Collaborer avec les partenaires et les intervenants : ",
            para4:
              "Les gestionnaires cherchent à obtenir, de façon délibérée et ingénieuse, un grand éventail de perspectives. Lorsqu’ils établissent des partenariats, ils gèrent les attentes et tentent de trouver un consensus. Ils font preuve d’ouverture et de souplesse afin d’améliorer les résultats et apportent une perspective globale de l’organisation à leurs interactions. Les gestionnaires reconnaissent le rôle des partenaires dans l’obtention des résultats.",
            para5Title: "Promouvoir l’innovation et orienter le changement : ",
            para5:
              "Les gestionnaires créent un environnement propice aux idées audacieuses, à l’expérimentation et à la prise de risques en toute connaissance de cause. Lors de la mise en œuvre d’un changement, ils maintiennent l’élan, surmontent la résistance et anticipent les conséquences. Ils perçoivent les revers comme une bonne occasion de comprendre et d’apprendre.",
            para6Title: "Obtenir des résultats : ",
            para6:
              "Les gestionnaires s’assurent de répondre aux objectifs de l’équipe en gérant les ressources. Ils prévoient, planifient et surveillent les progrès, et font des ajustements au besoin. Ils démontrent leur connaissance du contexte lors de la prise de décisions. Les gestionnaires assument la responsabilité personnelle à l’égard de leurs actions et des résultats de leurs décisions."
          }
        }
      },

      //Background Page
      backgroundPage: {
        title: "Page de contexte",
        orgChart: "Organigramme",
        Scenarios: "Scénarios"
      },

      //Inbox Page
      inboxPage: {
        title: "Boîte de réception",
        taskList: "Liste des tâches",
        notePad: "bloc-notes",
        textTools: "Outils de texte",
        emailFeatures: "Fonctions de messagerie",
        progressSaved: "Progression enregistrée",
        timer: "Minuteur"
      },

      //Confirmation Page
      confirmationPage: {
        submissionConfirmed: "Soumission Confirmée"
      },

      //Test tabs
      tabs: {
        instructionsTabTitle: "Instructions",
        backgroundTabTitle: "Contexte",
        inboxTabTitle: "Boîte de réception"
      }
    },

    //Screen Reader
    ariaLabel: {
      mainMenu: "menu-principal",
      languageToggleBtn: "bouton-de-langue-a-bascule"
    },

    //Commons
    commons: {
      psc: "Commission de la fonction publique",
      nextButton: "Suivant",
      backButton: "Retour",
      startTest: "Commencer le test",
      submitTestButton: "Soumettre le test",
      exitTest: "Quitter le test",
      passStatus: "Réussi",
      failStatus: "Échoue",
      enabled: "Activé",
      disabled: "Désactivé",
      backToTop: "Haut de la page"
    }
  }
});

export default LOCALIZE;
