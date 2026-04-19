// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-certifications",
          title: "certifications",
          description: "Professional certifications and completed programs.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/certifications/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-fine-tuning-large-language-models-from-full-training-to-parameter-efficient-methods",
        
          title: "Fine-Tuning Large Language Models: From Full Training to Parameter-Efficient Methods",
        
        description: "An advanced deep dive into fine-tuning LLMs, covering full fine-tuning, PEFT methods like LoRA, and real-world trade-offs.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/fine-tuning-llm/";
          
        },
      },{id: "post-encoder-vs-decoder-understanding-bert-gpt-and-modern-llm-architectures",
        
          title: "Encoder vs Decoder: Understanding BERT, GPT and Modern LLM Architectures",
        
        description: "A deep dive into encoder-only, decoder-only, and encoder-decoder architectures, and how models like BERT, GPT, and BART differ.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/encoder-vs-decoder-bert-gpt/";
          
        },
      },{id: "post-a-deep-dive-into-attention-self-attention-multi-head-attention-and-positional-encoding",
        
          title: "A Deep Dive into Attention: Self-Attention, Multi-Head Attention and Positional Encoding",
        
        description: "A comprehensive guide to attention mechanisms in Transformers, including intuition, QKV, self-attention, multi-head attention, and positional encoding.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/attention-deep-dive/";
          
        },
      },{id: "post-transformer-architecture-explained-attention-is-all-you-need",
        
          title: "Transformer Architecture Explained: Attention is All You Need",
        
        description: "A deep dive into Transformer architecture, including encoder-decoder structure, attention mechanism, positional encoding, and multi-head attention.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/transformer-architecture-explained/";
          
        },
      },{id: "post-how-do-llms-work-understanding-next-token-prediction",
        
          title: "How Do LLMs Work? Understanding Next Token Prediction",
        
        description: "A simple but deep explanation of how Large Language Models work using next-token prediction and probability.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/how-llms-work/";
          
        },
      },{id: "post-what-is-generative-ai-types-and-architectures",
        
          title: "What is Generative AI? Types and Architectures",
        
        description: "An overview of Generative AI, including text, image, and audio generation, and the architectures behind them.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/generative-ai-overview/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-presented-our-paper-comparative-analysis-of-seven-yolo-architectures-applied-for-the-detection-of-objects-of-different-scale-at-different-scene-densities-at-the-18th-asian-conference-on-intelligent-information-and-database-systems-aciids-2026-in-kaohsiung-taiwan-this-project-was-conducted-together-with-professor-kazimierz-choroś-conference-poster",
          title: 'I presented our paper, “Comparative Analysis of Seven YOLO Architectures Applied for the...',
          description: "",
          section: "News",},{id: "projects-autonomous-research-agent-langgraph-ai",
          title: '🧠 Autonomous Research Agent (LangGraph AI)',
          description: "An advanced AI agent built with LangGraph (LangChain 1.0+) that can autonomously reason, plan, execute tools, and synthesize complex, real-time answers.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/langgraph_agent/";
            },},{id: "projects-building-a-reliable-ai-the-rag-q-amp-a-system",
          title: 'Building a Reliable AI: The RAG Q&amp;amp;A System',
          description: "A portfolio project demonstrating a RAG architecture...",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rag_project/";
            },},{id: "projects-ai-powered-traffic-analysis-system",
          title: '🚦 AI-Powered Traffic Analysis System',
          description: "Real-Time Vehicle Detection • Tracking • Speed Estimation • Red-Light Violation Detection • LLM Traffic Reports",
          section: "Projects",handler: () => {
              window.location.href = "/projects/traffic-analysis-ai/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%61%7A%69%6D%6F%76.%66%65%72%69%64.%39%39@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/faridkazimov", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/farid-kazimov-a7b90a214", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0007-9279-0992", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
