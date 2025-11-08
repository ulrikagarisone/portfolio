---
title: "Train Ticket Machines — International Interface Inconsistency"
description: "Travelers face confusion when buying tickets abroad due to unfamiliar machine logic and different interaction patterns"
date: 2024-10-10
pubDate: 2024-10-17
tags: ["Travel", "Public Transit", "Interface Design", "International UX"]
status: "completed"
category: "observation"
---

# Inconsistent Train Ticket Interfaces Abroad

## Context
**Location:** Lille train station (France), evening  
**Situation:** Belgian traveler unable to quickly purchase ticket due to unfamiliar interface flow and unclear options.

## The UX Problem
Critical differences in purchase logic between countries are not visually explained, leading to:
- Confusion and delays
- Embarrassment (holding up queue)
- Anxiety (might miss train)
- Language barriers compound the problem

**Observed scenario:**
- User approaches French ticket machine
- Expects Belgian interface logic (destination → class → payment)
- French system uses (class → destination → date → payment)
- Different button layouts
- Different terminology ("Billet" vs "Ticket")
- Different payment flow
- No visual "how this works" guide
- Queue building behind = pressure

## Why It Matters
**Mobility barriers:**
- Reduces confidence in international travel
- Creates accessibility issues for frequent travelers
- Discourages public transit use

**Emotional impact:**
- Stress and embarrassment
- Feeling stupid or incompetent
- Negative perception of destination
- Lost time (may miss connection)

## Root Causes
1. **National standards vary** — no EU-wide consistency
2. **No cross-border UX testing** with international users
3. **Assumption of local knowledge** embedded in design
4. **Language-first design** — assumes fluency
5. **No onboarding for "visitor mode"**

## Solution Directions

### Quick Fix
**Visual orientation card:**
Sticker on machine:
"New to French ticket machines?
Scan QR for quick guide in your language"

### Better Solution
**Visitor mode option:**
- Button: "International traveler?"
- Shows step-by-step with icons
- Compares to nearby countries: "Different from Belgium/NL/UK"
- Available in 10+ languages

## UX Principles Applied
- **Consistency** — Familiar patterns reduce cognitive load
- **Learnability** — First-time use should be intuitive
- **Error prevention** — Guide before confusion happens
- **Accessibility** — Language shouldn't block essential services
- **Universal design** — Works for locals AND visitors

## Related Patterns
- Progressive onboarding
- Contextual help systems
- Icon-driven interfaces
- Multi-language design
- Graceful degradation

---

**Key Takeaway:** Don't assume local knowledge. Design for the international visitor—it helps everyone.