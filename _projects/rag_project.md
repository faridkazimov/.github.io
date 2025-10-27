---
layout: post
title: Building a Reliable AI: The RAG Q&A System
date: 2025-10-28 00:15:00 +0100
description: A portfolio project demonstrating a RAG architecture using LangChain, FAISS, and Streamlit to eliminate LLM hallucinations.
categories:
  - Projects
  - AI
  - Portfolio
tags:
  - Python
  - LLM
  - RAG
  - LangChain
  - Streamlit
  - FAISS
  - OpenAI
  - Prompt Engineering
github: https://github.com/faridkazimov/rag_project
demo: https://ragproject-a9dq4num5grltk6nxhjcby.streamlit.app/
# thumbnail: /assets/img/project-covers/rag-project-cover.png # (Proje kapak resminiz varsa buraya ekleyin)
---

Despite their immense capabilities, Large Language Models (LLMs) suffer from a critical weakness: **hallucination**. This is the tendency to confidently produce false or fabricated information when they don't know an answer. This project was developed to provide a practical solution to this core problem.

It is an interactive web application that uses the **Retrieval-Augmented Generation (RAG)** architecture to answer questions based **only on the content of a provided document**, ensuring the answers are reliable and grounded in fact.

[![Streamlit App](https://static.streamlit.io/badges/streamlit_badge_black_white.svg)](https://ragproject-a9dq4num5grltk6nxhjcby.streamlit.app/)

---

### Project Aim & The Problem It Solves

One of the biggest hurdles to enterprise AI adoption is trust. When a company needs an AI system to answer questions about its internal documents, technical manuals, or legal texts, the answers must be 100% accurate and based *only* on those documents.

A standard LLM, when asked, "What was Project Titan's budget?", might invent a number based on its general internet knowledge. This project solves that problem by **grounding** the LLM using RAG. The system is given a single source of truth, and the AI is forced to use *only* that document's content to generate its answer.

---

### System Architecture: The Journey of a Question

When a user asks a question, the following steps occur in the background:

1.  **Data Preparation (One-time):** The reference `bilgi_belgesi.txt` file is loaded and split into small, semantically meaningful chunks.
2.  **Vectorization (Local):** Hugging Face's `all-MiniLM-L6-v2` model converts each text chunk into a mathematical vector, capturing its semantic meaning.
3.  **Database (Local):** These vectors are loaded into a **FAISS** vector database, which is optimized for high-speed similarity search.
4.  **Query (User):** The user asks a question, e.g., "What is the drone's flight range?"
5.  **Retrieval:** The system's "Librarian," our FAISS database, also converts the user's question into a vector and instantly finds the most semantically similar text chunks (the "context") from the document.
6.  **Augmentation:** The system prepares a special prompt for the LLM:
    > **Context:** "[...The relevant text chunk retrieved from FAISS...]"
    > **Question:** "What is the drone's flight range?"
    > **Instruction:** "Answer the question based *only* on the context provided above."
7.  **Generation:** This augmented prompt is sent to OpenAI's LLM. Instead of hallucinating, the model generates its answer by synthesizing the information found in the provided context.

---

### Challenges Faced & Solutions Implemented

This project went beyond a simple tutorial, presenting real-world engineering problems that required practical solutions.

#### Challenge 1: Knowledge Leakage and Hallucination
During initial tests, the system would answer questions that were completely unrelated to the document (e.g., "What is the capital of Poland?"). It was ignoring the RAG context and defaulting to its own general knowledge.

**Solution: Strict Prompt Engineering**
To prevent this "leakage," a custom `PromptTemplate` was added to the `RetrievalQA` chain. This template gives the LLM a non-negotiable instruction:
> "Use the following pieces of context to answer the question. **If you don't find the answer in the context, just say 'This information is not available in the provided document.' Do not use your own knowledge.**"
This ensured the system remained reliable and strictly bound to the document.

#### Challenge 2: Performance and User Experience
The Streamlit app was slow, as it tried to reload the heavy Hugging Face model and rebuild the vector database every time the user asked a question or interacted with the UI.

**Solution: Streamlit Caching**
By using Streamlit's `@st.cache_resource` decorator on the functions responsible for loading the model and creating the database, these expensive operations are now performed only once when the app first starts. The results are cached in memory, making the app incredibly fast and responsive for the user.

---

### 🛠️ Technologies Used

* **Python:** The core language for the project.
* **LangChain:** The main framework used to orchestrate the entire RAG pipeline, connecting the LLM, retriever, and prompts.
* **Streamlit:** Used for rapid prototyping and building the interactive web interface.
* **OpenAI (GPT Models):** The "brain" of the operation, responsible for understanding the prompt and generating the final answer (Generation).
* **Hugging Face Transformers:** Used to run the free and local `all-MiniLM-L6-v2` model for creating text embeddings (Embeddings).
* **FAISS (Facebook AI):** The high-performance vector database used for similarity search (Retrieval).

---

### ⚙️ Setup and Running Locally

To run this project on your local machine:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/faridkazimov/rag_project](https://github.com/faridkazimov/rag_project)
    cd rag_project
    ```

2.  **Create and activate the virtual environment:**
    ```bash
    python -m venv venv
    source vK/bin/activate  # For MacOS/Linux
    # venv\Scripts\activate  # For Windows
    ```

3.  **Install the necessary libraries:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Set up your API key:**
    Create a file named `.env` and add your key inside it in the format: `OPENAI_API_KEY="sk-..."`

5.  **Run the application:**
    ```bash
    streamlit run streamlit_app.py
    ```
