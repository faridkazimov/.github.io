---
layout: page
title: 🧠 Autonomous Research Agent (LangGraph AI)
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

github: https://github.com/faridkazimov/ai-research-agent
demo: https://ai-research-agent-lrtyftta8ifzrmkcesnxom.streamlit.app/
---
[![Streamlit App](https://static.streamlit.io/badges/streamlit_badge_black_white.svg)](https://ai-research-agent-lrtyftta8ifzrmkcesnxom.streamlit.app/)


---

This project is an **autonomous AI Research Assistant** built using **LangChain 1.0+**, **LangGraph**, and **Streamlit**.

Unlike a standard RAG (Retrieval-Augmented Generation) system that only answers questions based on static documents, this agent can:
1.  **Reason:** Autonomously understand complex, multi-step user queries.
2.  **Plan:** Break down the problem into a sequence of required actions.
3.  **Act:** Use external tools (like live web search) to gather dynamic, real-time data.
4.  **Synthesize:** Combine all the gathered information to provide a comprehensive, final answer.

The agent is deployed with an interactive Streamlit UI and includes a simple rate-limiting feature (4 questions per session) to manage API costs.

---

## 🎥 Live Demo (Example Interaction)



**User:** "What company has a higher market cap right now, NVIDIA or Apple? And what's the difference in US dollars?"

**Agent:** *(Thinking...)*
1.  `[Action: tavily_search(query="NVIDIA market cap")]` -> Finds $4.8T
2.  `[Action: tavily_search(query="Apple market cap")]` -> Finds $3.9T
3.  `[Synthesizing]`
4.  *(Final Answer)* "Currently, NVIDIA has a higher market cap at approximately $4.8 trillion, which is about $900 billion more than Apple's $3.9 trillion."



---

### 🏛️ Core Architecture (How it Works)

This project uses **LangGraph** to define the agent's logic as a "state machine" or graph. This is the modern replacement for the older `AgentExecutor` class and allows for complex, cyclical, and stateful reasoning.

The graph consists of:
1.  **AgentState:** A simple dictionary (`TypedDict`) that defines the "memory" or "state" of our graph. It primarily tracks the list of messages.
2.  **Nodes:**
    * `agent_node`: The "brain" of the operation. It calls the LLM (`gpt-4o-mini`) to decide what to do next (call a tool or generate a final answer).
    * `tool_node`: The "action". This is a prebuilt `ToolNode` that executes any tool calls requested by the `agent_node` (e.g., performs the Tavily search).
3.  **Conditional Edges:**
    * The `should_continue` function acts as the router. After the `agent_node` runs, this edge checks if the LLM requested a tool.
    * **If YES (tool call exists):** The graph routes to the `tool_node`.
    * **If NO (no tool call):** The graph routes to `END`, and the agent provides its final answer.

This cyclical flow (`agent` -> `call_tool` -> `agent` -> `END`) allows the agent to call tools multiple times, reflect on the results, and solve complex problems.

<div class="mermaid">
graph TD
    A[Start: User Input] --> B(agent_node);
    B -- Tool Call? --> C{should_continue};
    C -- Yes --> D[tool_node];
    D --> B;
    C -- No --> E[END: Final Answer];
</div>

---

### 🗺️ Future Roadmap & Advanced Implementation.

#### 1. Add Conversational Memory (Stateless to Stateful)
The **`AgentState`** is already built for memory! The only change needed is in the **Streamlit UI code**: by passing the entire conversation history (`messages: Annotated[Sequence[BaseMessage], operator.add]`) to the agent on every turn, the LLM will remember past context and questions.

#### 2. Add Custom Tools (e.g., Private RAG Tool)
The agent currently only searches the **public web**. By simply decorating a custom Python function with `@tool`, we can add new tools, like a **`rag_search_tool`** to query private documents or PDFs. The agent will then **autonomously choose** between searching the web (TavilySearch) or your documents based on the user's need.

#### 3. Add Human-in-the-Loop (Approval Step)
To mitigate the risk of autonomous actions (like calling an expensive tool), we can add a **"pause" button** to the graph. The `should_continue` edge can return a state like **`"human_approval"`**, which interrupts the graph flow. The Streamlit UI can then display confirmation buttons ([Yes] / [No]) before allowing the agent to proceed to the tool call.

#### 4. Implement True Response Streaming (Word-by-Word)
To improve user experience, the Streamlit code can be refactored to use **`app.stream()`** instead of `app.invoke()`. By using a Python generator to yield output chunks to Streamlit's built-in **`st.write_stream()`**, the agent's final answer will render word-by-word, similar to ChatGPT.
