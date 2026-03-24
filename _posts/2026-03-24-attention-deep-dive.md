---
layout: post
title: "A Deep Dive into Attention: Self-Attention, Multi-Head Attention and Positional Encoding"
date: 2026-03-24
description: "A comprehensive guide to attention mechanisms in Transformers, including intuition, QKV, self-attention, multi-head attention, and positional encoding."
tags: [Attention, Transformers, LLM, Deep Learning]
categories: blog
---

## 🚀 Introduction

Modern Large Language Models (LLMs) are built on Transformer architectures, and at the heart of Transformers lies one key idea: **attention**.

Before attention, models such as RNNs processed sequences step by step. This made it difficult to capture long-range dependencies and limited scalability. Attention changed this by allowing models to process entire sequences at once and dynamically focus on the most relevant parts of the input.

In this post, we will take a deep and comprehensive look at:
- Attention  
- Self-Attention  
- Multi-Head Attention  
- Positional Encoding  

---

## 🧠 What is Attention?

At its core, attention answers a simple question:

> Which parts of the input are most important?

Instead of treating every word equally, the model assigns different importance scores to each token.

---

<div style="text-align: center;">
  <img src="/assets/img/blog/head-view.gif" alt="Attention mechanism visualization" style="max-width: 100%; width: 500px;">
</div>
<p style="text-align: center; font-size: 0.9em;">
  Source: Vig, J. (BertViz)
</p>

---

Consider the sentence:
"The cat sat on the mat because it was tired"

To understand “it”, the model must focus on “cat”, not “mat”.

---

## 🔍 Query, Key, Value (QKV)

Attention is computed using three vectors:

- Query (Q) → what we are looking for  
- Key (K) → what each word represents  
- Value (V) → the actual information  

---

<div style="text-align: center;">
  <img src="/assets/img/blog/qkv.ppm" alt="QKV Attention Diagram" style="max-width: 100%; width: 550px;">
</div>
<p style="text-align: center; font-size: 0.9em;">
  Source: ResearchGate (QKV Attention Diagram)
</p>

---

The model:
1. Compares Query with Keys  
2. Computes similarity scores  
3. Applies softmax  
4. Uses scores to weight Values  

This produces a context-aware representation.

---

## 🔁 Self-Attention

Self-attention allows each word to attend to all other words in the same sentence.


This enables:
- long-range dependency modeling  
- better contextual understanding  
- parallel computation  

---

## 🔀 Multi-Head Attention

Instead of a single attention mechanism, Transformers use multiple attention heads.

---

<div style="text-align: center;">
  <img src="/assets/img/blog/multiheadattention.webp" alt="Multi Head Attention Diagram" style="max-width: 100%; width: 650px;">
</div>
<p style="text-align: center; font-size: 0.9em;">
  Source: AIML.com
</p>

---

Each head learns different relationships:
- syntax  
- semantics  
- position  

Outputs are combined into a richer representation.

---

## 🧭 Positional Encoding

Transformers process all tokens simultaneously, so they need positional information.

---

<div style="text-align: center;">
  <img src="/assets/img/blog/positionalencoding.PNG" alt="Positional Encoding" style="max-width: 100%; width: 500px;">
</div>
<p style="text-align: center; font-size: 0.9em;">
  Source: Erdem, 2021
</p>


---

### 📐 Sinusoidal Encoding

$$
PE(pos, 2i) = \sin\left(\frac{pos}{10000^{2i/d}}\right)
$$

$$
PE(pos, 2i+1) = \cos\left(\frac{pos}{10000^{2i/d}}\right)
$$

This allows:
- encoding relative positions  
- generalization to longer sequences  

---

### 🔄 Learnable Positional Encoding

Instead of fixed functions, models can learn positional embeddings during training.

---

### 🧩 Segment Embeddings

Used in models like BERT:
- distinguish sentence A vs B  
- useful for QA and classification  

---

## 🔗 Putting Everything Together

1. Tokens → embeddings  
2. Positional encoding added  
3. Self-attention computes relationships  
4. Multi-head attention enriches representation  

---

## ⚡ Why This Changed Everything

Transformers:
- remove sequential bottlenecks  
- scale efficiently  
- capture global context  

---

## 🎯 Conclusion

Attention is the foundation of modern AI.

- Attention → relevance  
- Self-attention → full connectivity  
- Multi-head → multiple perspectives  
- Positional encoding → order  

Together, they power modern LLMs.

---

🚀 In the next post, we will explore **Encoder vs Decoder architectures and models like BERT, GPT, and BART**.
