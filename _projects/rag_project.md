---
layout: page
title: Document Question-Answering System (RAG Project)
description: A RAG-based web app using Streamlit and LangChain to answer questions about a text document, preventing LLM hallucinations.
img: assets/img/rag_project_cover.jpg # (Add your project cover image here)
importance: 1
category: AI / NLP
github: https://github.com/faridkazimov/rag_project
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/rag_project_demo.gif" title="Project Demo GIF" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A demo of the project's Streamlit interface. (You can add a GIF or screenshot here)
</div>

While Large Language Models (LLMs) like OpenAI's are incredibly powerful, they have a significant weakness known as "hallucination"—a tendency to produce contextually incorrect or entirely false information.

This project directly addresses this challenge using the **Retrieval-Augmented Generation (RAG)** architecture. The result is an interactive web application built with Streamlit that produces reliable, factual, and verifiable answers based *only* on the content of a single text document provided by the user.

---

## 🚀 Project Goals and Architecture

The primary goal of this project was to combine the creative capabilities of LLMs with the factual accuracy of a specific knowledge base (in this case, a single document).

### How the RAG Architecture Works

The system follows a three-step process to answer a query:

1.  **Indexing (Chunking and Embedding):** When a user uploads a document, the text is divided into smaller, manageable "chunks." Each of these chunks is converted into semantic vectors using Hugging Face's `all-MiniLM-L6-v2` model and stored in a FAISS vector database.
2.  **Retrieval:** When a user asks a question, that question is also converted into a vector. The FAISS database is used to find the document chunks that are semantically most similar to the question vector (the most relevant context).
3.  **Generation:** Finally, the original question and the relevant document chunks found by FAISS are combined to create a "prompt." This enriched prompt is sent to the OpenAI LLM to generate the answer.

This architecture effectively prevents hallucinations by forcing the model to base its answer solely on the provided document content.

---

## 🛠️ Technologies Used

A modern stack of open-source tools was used to bring this RAG pipeline to life:

* **Python:** The main programming language for the project.
* **LangChain:** The core framework for managing the RAG flow (ingestion, chunking, vectorization, and querying LLMs).
* **Streamlit:** Used to build the fast and interactive web interface.
* **OpenAI API:** Used for the Generation step (answering the question).
* **Hugging Face Transformers:** Used to provide the `all-MiniLM-L6-v2` model for text embeddings.
* **FAISS (Facebook AI Similarity Search):** Used for high-efficiency vector storage and similarity search.

---

## 💡 Challenges and Learnings

* **Cost Control:** Due to the potential cost of OpenAI APIs, opting for a free, locally-run Hugging Face model for embeddings significantly reduced costs.
* **Performance:** Using a vector database like FAISS enabled instant retrieval even among thousands of document chunks.
* **Prompt Engineering:** One of the most challenging parts was designing a system prompt that clearly instructed the LLM to use *only* the provided context and not to add external information.

---

## ⚙️ Setup and Running Locally

Follow these steps to run the project on your local machine:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/faridkazimov/rag_project](https://github.com/faridkazimov/rag_project)
    cd rag_project
    ```

2.  **Create and activate the virtual environment:**
    ```bash
    # MacOS/Linux
    python -m venv venv
    source venv/bin/activate
    
    # Windows (PowerShell)
    # python -m venv venv
    # .\venv\Scripts\Activate.ps1
    ```

3.  **Install the necessary libraries:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Set up your API key:**
    Create a file named `.env` and add your key inside it in the format:
    `OPENAI_API_KEY="sk-..."`

5.  **Run the application:**
    ```bash
    streamlit run streamlit_app.py
    ```
