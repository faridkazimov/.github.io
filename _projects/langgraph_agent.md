---
layout: page
title: "🧠 Autonomous Research Agent (LangGraph AI)"
date: 2025-11-20 00:00:00 +0100
description: An advanced AI agent built with LangGraph (LangChain 1.0+) that can autonomously reason, plan, execute tools, and synthesize complex, real-time answers.
categories:
  - Projects
  - AI
  - Deep Learning
  - Agent
tags:
  - Python
  - LangGraph
  - LangChain
  - LLM
  - Agents
  - Streamlit
  - StateMachine
github: https://github.com/faridkazimov/ai-research-agent # <= REPLACE THIS
demo: https://ai-research-agent-lrtyftta8ifzrmkcesnxom.streamlit.app/ # <= REPLACE THIS
importance: 1
---

<a href="https://ai-research-agent-lrtyftta8ifzrmkcesnxom.streamlit.app/" class="btn btn-primary" role="button" target="_blank" rel="noopener noreferrer">
    🎈 Try the Live Demo (Streamlit)
</a>

---

This project is an **autonomous AI Research Assistant** built using **LangChain 1.0+**, **LangGraph**, and **Streamlit**.

Unlike a standard RAG (Retrieval-Augmented Generation) system that only answers questions based on static documents, this agent can perform complex, cyclical reasoning: **Reason**, **Plan**, **Act** (using tools), and **Synthesize** information to provide comprehensive, real-time answers.

The agent is deployed with an interactive Streamlit UI and includes a simple rate-limiting feature (4 questions per session) to manage API costs.

---

### 🎥 Live Demo (Example Interaction)

To illustrate the agent's multi-step reasoning capability:

| User Query | Agent's Logic & Actions | Final Answer |
| :--- | :--- | :--- |
| **"What company has a higher market cap right now, NVIDIA or Apple? And what's the difference in US dollars?"** | [Action: tavily\_search(query="NVIDIA market cap")] -> Finds $4.8T<br>[Action: tavily\_search(query="Apple market cap")] -> Finds $3.9T<br>[Synthesizing] | "Currently, **NVIDIA** has a higher market cap at approximately **$4.8 trillion**, which is about **$900 billion** more than Apple's $3.9 trillion." |

---

### 🏛️ Core Architecture (LangGraph State Machine)

This project uses **LangGraph** to define the agent's logic as a **"state machine" or graph**. This modern architecture replaces older `AgentExecutor` patterns, allowing for complex, cyclical, and stateful reasoning required for true autonomous action.

#### Key Components:

* **AgentState (Memory):** A simple dictionary that defines the "memory" or **state** of our graph, primarily tracking the list of messages in the conversation.
* **agent\_node (The Brain):** Calls the **LLM (`gpt-4o-mini`)** to decide what to do next: either call an external tool or generate a final answer.
* **tool\_node (The Action):** Executes any tool calls requested by the `agent_node` (e.g., performs the real-time Tavily web search).

#### Conditional Edges (The Router):

The **`should_continue`** function acts as the **router**. After the `agent_node` runs, this edge checks the LLM's output:
* **If Tool Call Exists (YES):** The graph routes back to the **`tool\_node`** for action.
* **If Final Answer Exists (NO):** The graph routes to **`END`**.

This cyclical flow (**agent -> call\_tool -> agent -> END**) allows the agent to call tools multiple times, reflect on the results, and solve problems that require multiple steps of data gathering.

---

### 🗺️ Future Roadmap & Advanced Implementation

#### 1. Add Conversational Memory (Stateless to Stateful)
The **`AgentState`** is already built for memory! The only change needed is in the **Streamlit UI code**: by passing the entire conversation history (`messages: Annotated[Sequence[BaseMessage], operator.add]`) to the agent on every turn, the LLM will remember past context and questions.

#### 2. Add Custom Tools (e.g., Private RAG Tool)
The agent currently only searches the **public web**. By simply decorating a custom Python function with `@tool`, we can add new tools, like a **`rag_search_tool`** to query private documents or PDFs. The agent will then **autonomously choose** between searching the web (TavilySearch) or your documents based on the user's need.

#### 3. Add Human-in-the-Loop (Approval Step)
To mitigate the risk of autonomous actions (like calling an expensive tool), we can add a **"pause" button** to the graph. The `should_continue` edge can return a state like **`"human_approval"`**, which interrupts the graph flow. The Streamlit UI can then display confirmation buttons ([Yes] / [No]) before allowing the agent to proceed to the tool call.

#### 4. Implement True Response Streaming (Word-by-Word)
To improve user experience, the Streamlit code can be refactored to use **`app.stream()`** instead of `app.invoke()`. By using a Python generator to yield output chunks to Streamlit's built-in **`st.write_stream()`**, the agent's final answer will render word-by-word, similar to ChatGPT.
