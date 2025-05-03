document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const backBtn = document.getElementById('backBtn');
    const weekButtons = document.querySelectorAll('.week-btn');
    const weekSelection = document.querySelector('.week-selection');
    const learningContent = document.getElementById('learning-content');
    const weekTitle = document.getElementById('week-title');
    const weekMaterials = document.getElementById('week-materials');

    // Add event listeners
    backBtn.addEventListener('click', function() {
        if (!learningContent.classList.contains('hidden')) {
            // If showing learning content, go back to week selection
            learningContent.classList.add('hidden');
            weekSelection.classList.remove('hidden');
        } else {
            // If showing week selection, go back to landing page
            window.location.href = 'index.html';
        }
    });

    weekButtons.forEach(button => {
        button.addEventListener('click', function() {
            const weekNumber = this.getAttribute('data-week');
            showWeekContent(weekNumber);
        });
    });

    // Function to display week content
    function showWeekContent(weekNumber) {
        // Get the week data
        const weekData = quizData[`week${weekNumber}`];

        if (!weekData) {
            alert('Week data not found!');
            return;
        }

        // Update title
        weekTitle.textContent = weekData.title;

        // Clear previous content
        weekMaterials.innerHTML = '';

        // Create learning content
        const contentContainer = document.createElement('div');
        contentContainer.className = 'learning-container';

        // Add Week notes based on week number
        if (weekNumber === '1' || weekNumber === '2' || weekNumber === '3' || weekNumber === '4' || weekNumber === '5' || weekNumber === '6' || weekNumber === '7' || weekNumber === '8') {
            let notesTitle, notesContent;

            if (weekNumber === '1') {
                notesTitle = 'Week 1 Lecture Notes';
                notesContent = `
                <div class="audio-player-container">
                    <audio id="lecture-audio" src="assets/week1-audio.wav" preload="metadata"></audio>
                    <div class="audio-controls">
                        <button id="play-pause-btn" class="audio-play-pause" aria-label="Play audio">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                        </button>
                        <button id="speed-btn" class="audio-speed-btn">1.0x</button>
                    </div>
                    <div class="audio-progress">
                        <div class="audio-progress-filled"></div>
                    </div>
                    <div class="audio-time">0:00 / 0:00</div>
                </div>

                <h2>Week 1: Principles of Management - Key Notes</h2>

                <h3>1. What is Management?</h3>
                <ul>
                    <li>Coordinating and overseeing others' work to achieve goals <strong>efficiently</strong> and <strong>effectively</strong>.</li>
                    <li>Creating a conducive environment for goal accomplishment.</li>
                    <li><strong>Efficiency:</strong> "Doing things right" - using resources wisely (means, low waste).</li>
                    <li><strong>Effectiveness:</strong> "Doing the right things" - achieving goals (ends, high attainment).</li>
                </ul>

                <h3>2. Who are Managers & Where do they Work?</h3>
                <ul>
                    <li><strong>Manager:</strong> Someone who coordinates & oversees others' work.</li>
                    <li><strong>Levels:</strong>
                        <ul>
                            <li><strong>First-Line:</strong> Manage non-managerial employees.</li>
                            <li><strong>Middle:</strong> Manage first-line managers.</li>
                            <li><strong>Top:</strong> Make organization-wide decisions, set goals/plans.</li>
                        </ul>
                    </li>
                    <li><strong>Organization:</strong> A deliberate arrangement of people for a specific purpose (distinct purpose, people, deliberate structure).</li>
                </ul>

                <h3>3. What Managers Do: Functions (POLC)</h3>
                <ul>
                    <li><strong>Planning:</strong> Defining goals, strategies, and plans.</li>
                    <li><strong>Organizing:</strong> Arranging tasks, structure, and resources.</li>
                    <li><strong>Leading:</strong> Motivating, directing, communicating with, and resolving conflicts among people.</li>
                    <li><strong>Controlling:</strong> Monitoring performance, comparing with goals, and correcting deviations.</li>
                    <li><em>Note:</em> Managers often perform these functions simultaneously and non-sequentially.</li>
                </ul>

                <h3>4. What Managers Do: Roles (Mintzberg)</h3>
                <ul>
                    <li><strong>Interpersonal:</strong> Figurehead (symbolic), Leader (influence), Liaison (networking).</li>
                    <li><strong>Informational:</strong> Monitor (gather info), Disseminator (share info inside), Spokesperson (share info outside).</li>
                    <li><strong>Decisional:</strong> Entrepreneur (initiate change), Disturbance Handler (solve crises), Resource Allocator (distribute resources), Negotiator (represent unit).</li>
                </ul>

                <h3>5. What Managers Do: Skills (Katz)</h3>
                <ul>
                    <li><strong>Technical:</strong> Job-specific knowledge (Crucial for First-Line).</li>
                    <li><strong>Human:</strong> Ability to work well with others (Crucial for Middle).</li>
                    <li><strong>Conceptual:</strong> Ability to think about abstract/complex situations (Crucial for Top).</li>
                </ul>

                <h3>6. The Changing Management Landscape</h3>
                <ul>
                    <li><strong>Environment Shift:</strong> Traditional (stable, predictable) -> Contemporary (dynamic, turbulent, complex, global, competitive).</li>
                    <li><strong>Increased Focus On:</strong>
                        <ul>
                            <li><strong>Customers:</strong> Managing relationships, delivering value & high-quality service ("Customer is King").</li>
                            <li><strong>Innovation:</strong> Doing things differently, exploring new areas, risk-taking.</li>
                            <li><strong>Ethics & Social Responsibility:</strong> Rebuilding trust, accountability, values.</li>
                            <li><strong>Technology:</strong> Digitization, virtual/flexible work, mobility.</li>
                            <li><strong>Diversity:</strong> Managing heterogeneous workforce.</li>
                        </ul>
                    </li>
                    <li><strong>Shift in Practice:</strong> Less command/control -> More coordination/communication, empowerment, collaboration, learning.</li>
                </ul>

                <h3>7. Mainstream vs. Multistream Management</h3>
                <ul>
                    <li><strong>Mainstream:</strong> Focus on profit maximization, materialistic/individualistic well-being (efficiency focus).</li>
                    <li><strong>Multistream:</strong> Focus on well-being for multiple stakeholders (customers, employees, society, environment), balancing social, ecological, ethical concerns (virtue focus). Emphasis on participation, justice, fairness.</li>
                </ul>

                <h3>8. Characteristics of Excellent / Admired Contemporary Companies</h3>
                <ul>
                    <li>Action-oriented, customer-focused, value-driven.</li>
                    <li>Promote autonomy, entrepreneurship, innovation.</li>
                    <li>Focus on people/employee needs.</li>
                    <li>Lean structure, balance centralization/decentralization.</li>
                    <li>Ethical dealing with all stakeholders.</li>
                </ul>

                <h3>9. Why Study Management?</h3>
                <ul>
                    <li><strong>Universality:</strong> Management is needed in ALL organizations (all sizes, types, levels, areas).</li>
                    <li><strong>Reality:</strong> You will either manage or be managed.</li>
                    <li><strong>Benefits:</strong> Improves skills, understanding, career prospects.</li>
                    <li><strong>Rewards:</strong> Meaningful work, influence, compensation, status.</li>
                    <li><strong>Challenges:</strong> Hard work, dealing with people, uncertainty, dependence on others.</li>
                </ul>
            `;
            } else if (weekNumber === '2') {
                notesTitle = 'Week 2 Lecture Notes';
                notesContent = `
                <h2>Week 2: Evolution of Management - Key Notes</h2>

                <h3>1. Why Study Management Evolution?</h3>
                <ul>
                    <li>Understand the context of current practices.</li>
                    <li>Learn from past successes and failures.</li>
                    <li>See patterns and relationships between theories over time.</li>
                    <li>Evaluate the relevance of historical approaches today.</li>
                    <li>Recognize how external forces shape management.</li>
                </ul>

                <h3>2. Forces Shaping Management Practices</h3>
                <ul>
                    <li><strong>Social:</strong> Culture, values, relationships, social contracts (e.g., generational differences like Gen Y questioning).</li>
                    <li><strong>Political:</strong> Laws, government systems, regulations (e.g., Make in India, labor laws).</li>
                    <li><strong>Economic:</strong> Resource availability/distribution, shift to knowledge/information economy.</li>
                </ul>

                <h3>3. Classical Perspective (Approx. 1890s-1940s) - Focus: Efficiency & Rationality</h3>
                <ul>
                    <li><strong>Overall:</strong> Treat organization like a machine; find the "one best way."</li>
                    <li><strong>Scientific Management (Taylor, Gilbreths):</strong>
                        <ul>
                            <li>Apply science to job elements (replace rule-of-thumb).</li>
                            <li>Scientifically select, train, and develop workers.</li>
                            <li>Time-and-motion studies to improve efficiency (Gilbreths).</li>
                            <li>Wage incentives for increased output.</li>
                            <li><em>Critique:</em> Ignored social context and higher worker needs.</li>
                        </ul>
                    </li>
                    <li><strong>Bureaucratic Organizations (Weber):</strong>
                        <ul>
                            <li>Manage on rational, impersonal basis (not family ties).</li>
                            <li>Key Elements: Division of labor, clear authority hierarchy, formal selection (competence-based), formal rules/procedures, impersonality, career orientation.</li>
                            <li><em>Modern View:</em> Can lead to red tape, but provides consistency/fairness.</li>
                        </ul>
                    </li>
                    <li><strong>Administrative Principles (Fayol):</strong>
                        <ul>
                            <li>Focus on the <em>entire</em> organization.</li>
                            <li>Introduced 5 Management Functions: <strong>Planning, Organizing, Commanding (Leading), Coordinating, Controlling (POLC)</strong>.</li>
                            <li>Developed <strong>14 Principles of Management</strong> (e.g., Division of Work, Authority, Discipline, Unity of Command, Unity of Direction, Subordination of individual interest, Esprit de corps).</li>
                        </ul>
                    </li>
                </ul>

                <h3>4. Behavioral/Humanistic Perspective (Approx. 1930s-1950s) - Focus: People & Behavior</h3>
                <ul>
                    <li><strong>Overall:</strong> Shift focus to employee attitudes, behavior, and group processes. Recognize importance of people.</li>
                    <li><strong>Early Advocates (Follett, Barnard):</strong> Group ethics, organizations as social systems requiring cooperation, manager's role in communication/motivation.</li>
                    <li><strong>Human Relations Movement (Mayo):</strong>
                        <ul>
                            <li><strong>Hawthorne Studies:</strong> Found social factors and positive attention (feeling special) significantly impacted productivity more than physical conditions (like lighting). Highlighted group norms and morale.</li>
                        </ul>
                    </li>
                    <li><strong>Human Resources Perspective:</strong>
                        <ul>
                            <li>View workers as assets with potential. Focus on meaningful work, participation.</li>
                            <li><strong>Maslow:</strong> Hierarchy of Needs (Physiological -> Safety -> Belongingness -> Esteem -> Self-Actualization) motivates behavior.</li>
                            <li><strong>McGregor:</strong> Theory X (workers dislike work, need control) vs. Theory Y (workers enjoy work, are self-motivated).</li>
                        </ul>
                    </li>
                    <li><strong>Behavioral Science Approach:</strong> Applies scientific methods (psychology, sociology, etc.) to study behavior at work (Organizational Behavior - OB).</li>
                </ul>

                <h3>5. Quantitative Perspective (Approx. 1940s-1950s) - Focus: Math, Stats & Optimization</h3>
                <ul>
                    <li><strong>Overall:</strong> Use quantitative techniques (math, stats) for managerial decision-making and problem-solving.</li>
                    <li><strong>Operations Research (OR) / Management Science:</strong> Mathematical modeling to solve operational problems (e.g., resource allocation, scheduling).</li>
                    <li><strong>Operations Management:</strong> Focuses on managing the physical production of goods/services (forecasting, inventory, scheduling).</li>
                    <li><strong>Total Quality Management (TQM) (Deming, Juran):</strong>
                        <ul>
                            <li>Philosophy of <strong>continuous improvement</strong>.</li>
                            <li><strong>Customer focus</strong> (internal & external).</li>
                            <li>Process improvement.</li>
                            <li>Accurate measurement (statistical methods).</li>
                            <li>Employee <strong>empowerment</strong>.</li>
                        </ul>
                    </li>
                </ul>

                <h3>6. Contemporary Perspectives (Approx. 1960s-Present) - Focus: Environment & Situational Integration</h3>
                <ul>
                    <li><strong>Overall:</strong> Integrates previous perspectives; emphasizes the external environment.</li>
                    <li><strong>Systems Approach:</strong>
                        <ul>
                            <li>Organization viewed as an <strong>open system</strong> interacting with its environment.</li>
                            <li>Takes <strong>inputs</strong> (resources), transforms them (<strong>processes</strong>), produces <strong>outputs</strong> (goods/services).</li>
                            <li>Key Concepts: Subsystems, Synergy (whole > sum of parts), Entropy (tendency to decline without new inputs).</li>
                        </ul>
                    </li>
                    <li><strong>Contingency Approach:</strong>
                        <ul>
                            <li>Rejects universal management principles ("one best way").</li>
                            <li>Argues the <strong>appropriate management approach depends on the situation</strong> ("it depends").</li>
                            <li>Key Contingency Variables: Organization size, task technology routineness, environmental uncertainty, individual differences.</li>
                        </ul>
                    </li>
                </ul>
            `;
            } else if (weekNumber === '3') {
                notesTitle = 'Week 3 Lecture Notes';
                notesContent = `
                <h2>Week 3: Planning, Business Environment, and Strategic Management - Key Notes</h2>

                <h3>1. Planning Fundamentals</h3>
                <ul>
                    <li><strong>Definition:</strong> Deciding in advance <em>what</em> to do, <em>how</em>, <em>when</em>, and <em>who</em> will do it. Bridges the gap between present and future.</li>
                    <li><strong>Purpose/Importance:</strong> Provides direction, reduces uncertainty, minimizes waste/overlap, facilitates decision-making, sets standards for control, optimizes resource use.</li>
                    <li><strong>Features:</strong> Primary function, goal-oriented, pervasive (all levels), continuous, futuristic, involves decision-making.</li>
                    <li><strong>Planning Process:</strong> Set Objectives -> Develop Premises (Assumptions) -> Identify & Evaluate Alternatives -> Select Best Alternative -> Implement Plan -> Follow-up (Control).</li>
                    <li><strong>Contemporary Planning:</strong> Dynamic environments require <em>flexible</em> yet <em>specific</em> plans. <em>Environmental scanning</em> (including competitor intelligence) is crucial.</li>
                </ul>

                <h3>2. Types of Plans</h3>
                <ul>
                    <li><strong>By Breadth:</strong>
                        <ul>
                            <li><strong>Strategic:</strong> Long-term, broad, top-level, overall direction, resource allocation.</li>
                            <li><strong>Tactical/Operational:</strong> Short-term, specific, implement strategic plans, middle/lower-level.</li>
                        </ul>
                    </li>
                    <li><strong>By Time Frame:</strong> Long-term vs. Short-term.</li>
                    <li><strong>By Specificity:</strong>
                        <ul>
                            <li><strong>Directional:</strong> Flexible, general guidelines.</li>
                            <li><strong>Specific:</strong> Clearly defined, no room for interpretation.</li>
                        </ul>
                    </li>
                    <li><strong>By Frequency of Use:</strong>
                        <ul>
                            <li><strong>Single-Use:</strong> For unique, one-time situations.</li>
                            <li><strong>Standing:</strong> Ongoing plans for repetitive activities (Policies, Rules, Procedures).</li>
                        </ul>
                    </li>
                </ul>

                <h3>3. Business Environment</h3>
                <ul>
                    <li><strong>Definition:</strong> Sum total of external factors (individuals, institutions, forces) outside a business's control that affect its performance.</li>
                    <li><strong>Components:</strong>
                        <ul>
                            <li><strong>Internal Environment:</strong> Forces within the org (Owners, Board, Employees, Culture, Physical Environment). Affects adaptability.</li>
                            <li><strong>External Environment:</strong> Forces outside the org.
                                <ul>
                                    <li><strong>General Environment (PESTEL):</strong> Broad, indirect impact - Political, Economic, Socio-cultural, Technological, Environmental (Ecological), Legal factors.</li>
                                    <li><strong>Task/Specific Environment:</strong> Direct, day-to-day impact - Customers, Competitors, Suppliers, Labor Market.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>

                <h3>4. Business Environment Analysis</h3>
                <ul>
                    <li><strong>Importance:</strong> Identify opportunities & threats, adapt to change, aid planning, improve performance.</li>
                    <li><strong>Appraisal Techniques:</strong>
                        <ul>
                            <li><strong>SWOT Analysis:</strong> Strengths (Internal), Weaknesses (Internal), Opportunities (External), Threats (External).</li>
                            <li><strong>PESTLE Analysis:</strong> Systematic review of General Environment factors.</li>
                        </ul>
                    </li>
                    <li><strong>Industry Analysis (Porter's Five Forces):</strong> Assesses industry competitiveness and attractiveness.
                        <ul>
                            <li>Threat of New Entrants</li>
                            <li>Bargaining Power of Buyers</li>
                            <li>Bargaining Power of Suppliers</li>
                            <li>Threat of Substitute Products</li>
                            <li>Intensity of Rivalry among Existing Competitors</li>
                        </ul>
                    </li>
                    <li><strong>Resource-Based View (RBV):</strong> Competitive advantage comes from a firm's unique bundle of resources & capabilities.
                        <ul>
                            <li><strong>Resources:</strong> Tangible (physical, financial), Intangible (brand, reputation, patents), Human.</li>
                            <li><strong>Capabilities:</strong> Skills in using/deploying resources effectively.</li>
                            <li><strong>VRIO Framework:</strong> Sustainable competitive advantage if resources are <strong>V</strong>aluable, <strong>R</strong>are, costly to <strong>I</strong>mitate, and <strong>O</strong>rganized to capture value.</li>
                        </ul>
                    </li>
                </ul>

                <h3>5. Strategic Management</h3>
                <ul>
                    <li><strong>Strategy:</strong> An integrated, comprehensive plan of action to achieve long-term goals and gain a competitive advantage.</li>
                    <li><strong>Strategic Management:</strong> The ongoing process of analysis, decision-making, and actions (formulation, implementation, evaluation) managers take to develop and execute strategies.</li>
                    <li><strong>Process:</strong> Set Strategic Intent (Vision, Mission) -> Analyze (SWOT, Industry) -> Formulate Strategies -> Implement Strategies -> Evaluate Results.</li>
                    <li><strong>Levels of Strategy:</strong>
                        <ul>
                            <li><strong>Corporate:</strong> <em>Which businesses</em> should we be in? (Growth, Stability, Renewal). Tool: BCG Matrix (Stars, Cash Cows, ?, Dogs) helps portfolio decisions.</li>
                            <li><strong>Competitive (Business):</strong> <em>How</em> should we compete in each business? (Cost Leadership, Differentiation, Focus). Goal: Sustainable Competitive Advantage.</li>
                            <li><strong>Functional:</strong> <em>How</em> can departments (Marketing, HR, Finance) support the business/corporate strategies?</li>
                        </ul>
                    </li>
                    <li><strong>Business Model:</strong> How a company plans to make money (create & deliver value to customers and capture profit from it).</li>
                    <li><strong>Importance:</strong> Provides direction, ensures proactivity, coordinates decisions, critical for long-term survival and success.</li>
                </ul>
            `;
            } else if (weekNumber === '4') {
                notesTitle = 'Week 4 Lecture Notes';
                notesContent = `
                <h2>Week 4: Forecasting and Premising - Key Notes</h2>

                <h3>1. Planning Premises & Environmental Scanning</h3>
                <ul>
                    <li><strong>Planning Premises:</strong> The anticipated environment (assumptions about the future) in which plans are expected to operate. Essential for effective planning.</li>
                    <li><strong>Environmental Scanning:</strong> Screening large amounts of information to anticipate and interpret changes in the environment. Crucial for adapting and identifying issues/opportunities (e.g., Tupperware example).</li>
                    <li><strong>Competitor Intelligence:</strong> Gathering information about competitors (who, what, impact). Uses public sources, employees, reverse engineering. Key for proactive planning.</li>
                    <li><strong>Global Scanning:</strong> Environmental scanning focused on global forces/markets, vital for international businesses.</li>
                </ul>

                <h3>2. Forecasting Fundamentals</h3>
                <ul>
                    <li><strong>Definition:</strong> Predicting future outcomes/events based on past/present data and analysis or expert judgment. Forms the basis for planning.</li>
                    <li><strong>Features:</strong> Future-oriented, uses facts/data (not just opinion), employs specific techniques, basis for planning.</li>
                    <li><strong>Components:</strong> Can forecast economic conditions, technological developments, demand for products/services.</li>
                    <li><strong>Types (by Time):</strong> Short-term (&lt;3 months), Medium-term (3-24 months), Long-term (&gt;2 years).</li>
                    <li><strong>Process:</strong> Establish basis -> Estimate future -> Regulate (compare actual vs. forecast) -> Review/Refine.</li>
                    <li><strong>Importance:</strong> Adaptability, reveals control gaps, coordination, aids planning.</li>
                    <li><strong>Limitations:</strong> Not always accurate (uncertainty, random events), needs skills/data, can be costly/time-consuming.</li>
                </ul>

                <h3>3. Forecasting Techniques: Quantitative vs. Qualitative</h3>
                <ul>
                    <li><strong>Quantitative:</strong> Uses mathematical rules and past numerical data. Preferred when sufficient hard data exists. (Objective)
                        <ul>
                            <li><strong>Time Series Analysis:</strong> Projects past patterns (trends, seasonality) into the future using mathematical equations.</li>
                            <li><strong>Regression Models:</strong> Predicts one variable based on its relationship with other known variables (cause-effect).</li>
                            <li><em>Others mentioned: Econometric models, Economic indicators, Substitution effects</em></li>
                        </ul>
                    </li>
                    <li><strong>Qualitative:</strong> Uses judgment, intuition, and expert opinions. Preferred when data is limited or hard to get. (Subjective)
                        <ul>
                            <li><strong>Jury of Executive Opinion:</strong> Averages opinions of top-level managers/experts.</li>
                            <li><strong>Salesforce Composite:</strong> Aggregates sales forecasts from individual salespeople (bottom-up).</li>
                            <li><strong>Customer/Market Survey:</strong> Polls customers about future purchasing intentions.</li>
                            <li><strong>Delphi Method:</strong> Structured, iterative process to gain consensus from a panel of <em>anonymous</em>, geographically dispersed experts using a facilitator. Reduces groupthink.</li>
                        </ul>
                    </li>
                </ul>

                <h3>4. Forecasting Application Example: HR Planning</h3>
                <ul>
                    <li>Forecasting used to predict the <em>number</em> and <em>type</em> of employees needed (Demand Forecasting) and employee availability (Supply Forecasting - internal/external).</li>
                    <li>Helps identify staffing gaps and informs recruitment, selection, and succession planning.</li>
                    <li>Techniques like trend analysis, ratio analysis, scatter plots are used.</li>
                </ul>

                <h3>5. Benchmarking</h3>
                <ul>
                    <li><strong>Definition:</strong> The search for and adoption of best practices found in other organizations (competitors or non-competitors) that lead to superior performance.</li>
                    <li><strong>Purpose:</strong> Improve quality/processes by learning from the best, motivate change, set priorities.</li>
                    <li><strong>Process:</strong> Form team -> Identify what to benchmark -> Identify benchmark partners -> Collect data (internal & external) -> Analyze performance gap -> Develop & implement action plans.</li>
                </ul>

                <h3>6. Techniques for Resource Allocation</h3>
                <ul>
                    <li><strong>Resources:</strong> Assets needed to achieve goals (Financial, Physical, Human, Intangible, Structural/Cultural).</li>
                    <li><strong>Budgeting:</strong> Numerical plan allocating resources to specific activities (e.g., revenue, expense, cash, profit budgets). Enforces financial discipline.</li>
                    <li><strong>Scheduling:</strong> Detailing what, when, who, and in what order activities must be done. Tools:
                        <ul>
                            <li><strong>Gantt Chart:</strong> Bar chart visualizing planned vs. actual progress of tasks over time.</li>
                            <li><strong>Load Chart:</strong> Modified Gantt chart showing capacity allocation by department/resource.</li>
                            <li><strong>PERT Network:</strong> Flowchart for complex projects with interdependent tasks. Identifies task sequence, time estimates, and the <em>Critical Path</em> (longest sequence with zero slack).</li>
                        </ul>
                    </li>
                    <li><strong>Linear Programming:</strong> Mathematical technique for optimizing resource allocation under constraints.</li>
                </ul>

                <h3>7. Contemporary Planning Techniques (for Dynamic Environments)</h3>
                <ul>
                    <li><strong>Need:</strong> Address complexity, uncertainty, and need for flexibility.</li>
                    <li><strong>Project Management:</strong> Managing unique, complex, time-bound activities with defined beginnings/endings to meet specific goals (on time, budget, spec).</li>
                    <li><strong>Scenario Planning:</strong> Developing descriptions of different plausible future situations ("what-if" stories) to prepare for uncertainty and make plans more robust. Helps anticipate trends but weak on random events.</li>
                </ul>
            `;
            } else if (weekNumber === '5') {
                notesTitle = 'Week 5 Lecture Notes';
                notesContent = `
                <h2>Week 5: Perception, Decision Making, and Group Decision Making - Key Notes</h2>

                <h3>1. Perception & Its Influence</h3>
                <ul>
                    <li><strong>Perception:</strong> Process of organizing and interpreting sensory inputs to give meaning to the environment. Behavior is based on <em>perceived</em> reality.</li>
                    <li><strong>Influencing Factors:</strong> Perceiver (attitude, motives, experience), Target (novelty, size, context), Situation (time, setting).</li>
                    <li><strong>Attribution Theory:</strong> How we judge people based on attributing cause (internal vs. external) to their behavior. Determined by:
                        <ul>
                            <li><strong>Distinctiveness:</strong> Does the person behave differently in different situations?</li>
                            <li><strong>Consensus:</strong> Do others behave similarly in the same situation?</li>
                            <li><strong>Consistency:</strong> Does the person behave the same way over time?</li>
                        </ul>
                    </li>
                    <li><strong>Attribution Errors:</strong>
                        <ul>
                            <li><strong>Fundamental Attribution Error:</strong> Overestimating internal factors, underestimating external factors for <em>others</em>.</li>
                            <li><strong>Self-Serving Bias:</strong> Attributing <em>own</em> success to internal factors, failure to external factors.</li>
                        </ul>
                    </li>
                    <li><strong>Perceptual Shortcuts (Biases):</strong>
                        <ul>
                            <li><strong>Selective Perception:</strong> Interpreting based on own interests, background, experience.</li>
                            <li><strong>Halo Effect:</strong> Judging someone based on a single characteristic.</li>
                            <li><strong>Contrast Effects:</strong> Evaluation influenced by comparisons with others recently encountered.</li>
                            <li><strong>Stereotyping:</strong> Judging someone based on perception of their group.</li>
                            <li><strong>Profiling:</strong> Intense scrutiny based on group membership (often racial).</li>
                        </ul>
                    </li>
                </ul>

                <h3>2. Individual Decision Making</h3>
                <ul>
                    <li><strong>Definition:</strong> Choosing one alternative from a set. A <em>process</em>, not just a choice.</li>
                    <li><strong>Process (Rational Model Steps):</strong>
                        <ol>
                            <li>Identify the Problem (Discrepancy: existing vs. desired state).</li>
                            <li>Identify Decision Criteria (Relevant factors).</li>
                            <li>Allocate Weights to Criteria (Prioritize).</li>
                            <li>Develop Alternatives.</li>
                            <li>Analyze Alternatives (Feasibility, Satisfaction, Consequences).</li>
                            <li>Select the Best Alternative.</li>
                            <li>Implement the Alternative.</li>
                            <li>Evaluate Decision Effectiveness (Feedback).</li>
                        </ol>
                    </li>
                    <li><strong>Types of Problems & Decisions:</strong>
                        <ul>
                            <li><strong>Structured Problems:</strong> Familiar, straightforward, clear info -> <strong>Programmed Decisions:</strong> Repetitive, routine approach using Procedures, Rules, Policies (Lower Levels).</li>
                            <li><strong>Unstructured Problems:</strong> New, unusual, ambiguous info -> <strong>Non-Programmed Decisions:</strong> Unique, custom solutions requiring judgment & creativity (Upper Levels).</li>
                        </ul>
                    </li>
                    <li><strong>Limits to Rationality:</strong>
                        <ul>
                            <li><strong>Bounded Rationality (Simon):</strong> Managers make rational decisions but are limited by their ability to process information.</li>
                            <li><strong>Satisficing:</strong> Choosing the first alternative that is "good enough," not necessarily the absolute best.</li>
                        </ul>
                    </li>
                    <li><strong>Biases & Errors:</strong> Overconfidence, Immediate Gratification, Anchoring, Confirmation, Framing, Availability, Representation, Randomness, Hindsight, etc.</li>
                    <li><strong>Individual Differences:</strong> Personality (e.g., conscientiousness, self-esteem) and Gender can influence decision styles.</li>
                    <li><strong>Ethics in Decision Making:</strong> Criteria include Utilitarianism (greatest good), Rights (protecting liberties), Justice (fairness, impartiality).</li>
                </ul>

                <h3>3. Creativity in Decision Making</h3>
                <ul>
                    <li><strong>Creativity:</strong> Ability to produce novel and useful ideas.</li>
                    <li><strong>Innovation:</strong> Turning creative ideas into useful products/services/methods.</li>
                    <li><strong>Importance:</strong> Crucial for solving unstructured problems and adapting.</li>
                    <li><strong>Creative Process Stages (General):</strong> Preparation/Scanning, Incubation, Illumination (Insight), Verification.</li>
                    <li><strong>Three-Component Model:</strong> Creativity needs Expertise, Creative Thinking Skills, and Intrinsic Task Motivation.</li>
                    <li><strong>Creative Manager:</strong> Inquisitive, challenges status quo, independent judgment, ignores rigid rules.</li>
                </ul>

                <h3>4. Group Decision Making</h3>
                <ul>
                    <li><strong>Group:</strong> Two or more interacting, interdependent individuals working towards objectives. (Formal vs. Informal).</li>
                    <li><strong>Stages (Tuckman Model):</strong> Forming, Storming, Norming, Performing, Adjourning.</li>
                    <li><strong>Group Properties:</strong>
                        <ul>
                            <li><strong>Roles:</strong> Expected behavior patterns.</li>
                            <li><strong>Norms:</strong> Acceptable standards of behavior.</li>
                            <li><strong>Status:</strong> Socially defined rank/position.</li>
                            <li><strong>Size:</strong> Affects interaction (Social Loafing in large groups).</li>
                            <li><strong>Cohesiveness:</strong> Degree members are attracted and motivated to stay.</li>
                        </ul>
                    </li>
                    <li><strong>Pros:</strong> More complete info, diverse views, increased acceptance, often more accurate.</li>
                    <li><strong>Cons:</strong> Time-consuming, conformity pressure (Groupthink), dominance by few, ambiguous responsibility.</li>
                    <li><strong>Groupthink:</strong> Conformity pressure prevents critical appraisal of alternatives.</li>
                    <li><strong>Group Shift:</strong> Tendency to exaggerate initial positions (more risk/caution).</li>
                    <li><strong>Techniques:</strong>
                        <ul>
                            <li><strong>Interacting Groups:</strong> Typical face-to-face meetings.</li>
                            <li><strong>Brainstorming:</strong> Idea generation technique encouraging all alternatives without criticism.</li>
                            <li><strong>Nominal Group Technique (NGT):</strong> Structured face-to-face method; individual idea generation -> round-robin sharing -> discussion -> silent ranking/voting.</li>
                            <li><strong>Delphi Technique:</strong> Anonymous expert panel queried iteratively through questionnaires to achieve consensus. No face-to-face meeting.</li>
                        </ul>
                    </li>
                </ul>
            `;
            } else if (weekNumber === '6') {
                notesTitle = 'Week 6 Lecture Notes';
                notesContent = `
                <h2>Week 6: Management by Objectives (MBO) and Global Management - Key Notes</h2>

                <h3>1. Objectives & Goal Setting</h3>
                <ul>
                    <li><strong>Objective:</strong> An important end result towards which activities are aimed. Should be verifiable.</li>
                    <li><strong>Types:</strong>
                        <ul>
                            <li><strong>Quantitative/Verifiable:</strong> Measurable with numbers, metrics, timelines (e.g., achieve 12% ROI this fiscal year).</li>
                            <li><strong>Qualitative/Non-Verifiable:</strong> Subjective, descriptive, harder to measure (e.g., improve communication, reasonable profit).</li>
                        </ul>
                    </li>
                    <li><strong>SMART Goals:</strong> Best practice for setting objectives:
                        <ul>
                            <li><strong>S</strong>pecific: Clear, use action words.</li>
                            <li><strong>M</strong>easurable: Quantifiable, includes metrics/targets.</li>
                            <li><strong>A</strong>chievable: Realistic, attainable within scope.</li>
                            <li><strong>R</strong>elevant: Makes sense for the job/business need.</li>
                            <li><strong>T</strong>ime-bound: Has a defined deadline.</li>
                        </ul>
                    </li>
                </ul>

                <h3>2. Management by Objectives (MBO)</h3>
                <ul>
                    <li><strong>Definition (Drucker):</strong> A system where organizational goals are jointly set by supervisors and subordinates, aligning objectives throughout the organization to improve performance.</li>
                    <li><strong>Core Principles:</strong> Joint goal setting (participative), clear hierarchy of objectives, focus on results, periodic performance review & feedback, self-control.</li>
                    <li><strong>Process:</strong> Define Org Goals -> Define Employee Objectives (Jointly) -> Monitor Performance -> Evaluate Performance -> Provide Feedback.</li>
                    <li><strong>Benefits:</strong> Better managing, clarity, commitment, skill development, effective control, improved communication, objective appraisal.</li>
                    <li><strong>Limitations:</strong> Can be time-consuming, difficult to set goals, potential resentment, overemphasis on short-term, inflexibility if not managed well.</li>
                    <li><strong>Application:</strong> Knowledge firms, performance management, quality initiatives (e.g., Six Sigma), project management. Breaking down large goals into smaller, manageable tasks.</li>
                </ul>

                <h3>3. Global Management & International Business</h3>
                <ul>
                    <li><strong>Why Go Global?:</strong> Access new markets, resources, talent; faster innovation; increased competition; connectivity.</li>
                    <li><strong>Challenges:</strong> Complexity, competition for talent, cultural differences, environmental concerns, political/economic uncertainty.</li>
                    <li><strong>Parochialism:</strong> Viewing the world solely through one's own eyes/perspective; failing to recognize differences. Obstacle to global success.</li>
                    <li><strong>Global Attitudes:</strong>
                        <ul>
                            <li><strong>Ethnocentric:</strong> Home country practices are best.</li>
                            <li><strong>Polycentric:</strong> Host country managers/practices are best locally.</li>
                            <li><strong>Geocentric:</strong> World-oriented; seeks best practices/people globally.</li>
                        </ul>
                    </li>
                    <li><strong>Types of International Orgs:</strong> MNC (operates in multiple countries), Global Corp (centralized MNC), Transnational Corp (networked, balances global integration & local responsiveness).</li>
                    <li><strong>Ways to Go Global (Increasing Investment/Risk):</strong> Global Sourcing -> Exporting/Importing -> Licensing/Franchising -> Strategic Alliances/Joint Ventures -> Foreign Subsidiary.</li>
                </ul>

                <h3>4. Managing the Global Environment</h3>
                <ul>
                    <li><strong>Key Environmental Factors:</strong> Political-Legal (stability, laws), Economic (system type - market/command/mixed, currency, inflation), Socio-Cultural (values, norms, beliefs).</li>
                    <li><strong>National Culture:</strong> Shared values/attitudes shaping behavior (more influential than org culture often).</li>
                    <li><strong>Cultural Frameworks:</strong>
                        <ul>
                            <li><strong>High-Context:</strong> Relies on implicit communication, relationships, non-verbals (e.g., China, Japan).</li>
                            <li><strong>Low-Context:</strong> Relies on explicit, direct verbal communication (e.g., Germany, US).</li>
                            <li><strong>Hofstede's Dimensions:</strong>
                                <ul>
                                    <li>Power Distance (High/Low acceptance of inequality).</li>
                                    <li>Individualism vs. Collectivism.</li>
                                    <li>Masculinity (Achievement) vs. Femininity (Nurturing).</li>
                                    <li>Uncertainty Avoidance (High/Low tolerance for ambiguity).</li>
                                    <li>Long-Term vs. Short-Term Orientation.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>

                <h3>5. Comparative Management Styles</h3>
                <ul>
                    <li><strong>Management Style:</strong> Overall method of leadership used by managers (Autocratic, Consultative, Persuasive, Democratic, Laissez-faire, Management by Walking Around).</li>
                    <li><strong>Cross-Cultural Differences (Examples):</strong>
                        <ul>
                            <li><strong>Decision Making:</strong> US (Individualistic, fast), Japan (Consensus, slow decision/fast implementation), India (Hierarchical, slow), China (Committee, very slow).</li>
                            <li><strong>Planning Horizon:</strong> US (Short-term), Japan (Long-term), India/China (Mixed).</li>
                            <li><strong>Loyalty:</strong> US (To profession), Japan/India (To company - traditionally), China (Low).</li>
                            <li><strong>Control:</strong> US (Individual focus), Japan (Group/Peer focus), India (Supervisor), China (Leader/Superior).</li>
                        </ul>
                    </li>
                </ul>

                <h3>6. Global Quality Management</h3>
                <ul>
                    <li><strong>Importance:</strong> Key for competitive advantage in global markets.</li>
                    <li><strong>Evolution:</strong> Inspection -> Quality Control (QC) -> Quality Assurance (QA) -> Total Quality Management (TQM).</li>
                    <li><strong>TQM:</strong> Philosophy of continuous improvement involving customer focus, process improvement, employee involvement. Key Figures: Deming, Juran.</li>
                    <li><strong>Quality Standards/Awards:</strong> Frameworks for achieving quality excellence (e.g., ISO 9000, Malcolm Baldrige Award, European Quality Award). ISO 9000 focuses on documenting quality processes.</li>
                </ul>
            `;
            } else if (weekNumber === '7') {
                notesTitle = 'Week 7 Lecture Notes';
                notesContent = `
                <h2>Week 7: Organizing - Key Notes</h2>

                <h3>1. Organizing Fundamentals</h3>
                <ul>
                    <li><strong>Organization:</strong> A formalized intentional structure of roles and positions. (Can be Formal or Informal).</li>
                    <li><strong>Organizing:</strong> Arranging and structuring work to accomplish organizational goals. Involves identifying, classifying, and grouping activities, assigning authority, and coordinating efforts.</li>
                    <li><strong>Organizing Process:</strong> Establish Objectives -> Formulate Supporting Plans/Policies -> Identify & Classify Activities -> Group Activities (Resources) -> Delegate Authority -> Coordinate Groups (Horizontally & Vertically).</li>
                </ul>

                <h3>2. Organizational Structure & Design Elements</h3>
                <ul>
                    <li><strong>Organizational Structure:</strong> How job tasks are formally divided, grouped, and coordinated.</li>
                    <li><strong>Organizational Design:</strong> Process involving decisions about 6 key elements:
                        <ul>
                            <li><strong>Work Specialization:</strong> Dividing activities into separate jobs (Division of Labor). Increases efficiency but can lead to boredom.</li>
                            <li><strong>Departmentalization:</strong> Basis for grouping jobs (e.g., Function, Product, Geography, Process, Customer).</li>
                            <li><strong>Chain of Command:</strong> Line of authority from top to bottom, clarifies who reports to whom. Includes:
                                <ul>
                                    <li><em>Authority:</em> Rights inherent in a managerial position.</li>
                                    <li><em>Unity of Command:</em> Subordinate reports to only one supervisor (often broken in modern structures).</li>
                                </ul>
                            </li>
                            <li><strong>Span of Control:</strong> Number of subordinates a manager can effectively supervise.
                                <ul>
                                    <li><em>Wider Span:</em> Fewer levels, more efficiency, more autonomy (suited for skilled workers, simple tasks).</li>
                                    <li><em>Narrow Span:</em> More levels, closer control, less autonomy (suited for complex tasks, less skilled workers).</li>
                                </ul>
                            </li>
                            <li><strong>Centralization:</strong> Degree decision-making is concentrated at upper levels.</li>
                            <li><strong>Decentralization:</strong> Degree decision-making is pushed down to lower levels (linked to empowerment).</li>
                            <li><strong>Formalization:</strong> Degree jobs are standardized and behavior guided by rules/procedures.</li>
                        </ul>
                    </li>
                </ul>

                <h3>3. Organizational Design Models</h3>
                <ul>
                    <li><strong>Mechanistic Model (Bureaucracy):</strong> High specialization, rigid departmentalization, clear chain of command, narrow spans, centralization, high formalization. Efficient but rigid. Suited for stable environments, cost-minimization strategy.</li>
                    <li><strong>Organic Model:</strong> Cross-functional/hierarchical teams, free information flow, wide spans, decentralization, low formalization. Flexible and adaptive. Suited for dynamic environments, innovation strategy.</li>
                    <li><strong>Contingency Factors:</strong> Choice depends on Strategy, Size, Technology, Environment.</li>
                </ul>

                <h3>4. Common Organizational Designs</h3>
                <ul>
                    <li><strong>Simple Structure:</strong> Low departmentalization, wide spans, centralized authority (small businesses). Fast, flexible, low cost, but risky reliance on one person.</li>
                    <li><strong>Functional Structure:</strong> Groups by similar functions (Marketing, Finance). Efficient, allows specialization, but can create "silos".</li>
                    <li><strong>Divisional Structure:</strong> Groups around outputs (Product, Customer, Geography). Focuses on results, facilitates growth, but duplicates resources.</li>
                    <li><strong>Matrix Structure:</strong> Dual reporting lines (Functional + Product/Project). Uses specialists efficiently, flexible, but breaks unity of command, potential for conflict/stress.</li>
                    <li><strong>Team Structure:</strong> Entire organization made of work teams. Flexible, empowered, but needs training, potential role ambiguity.</li>
                    <li><strong>Network/Modular Structure:</strong> Core organization outsources major functions to partners. Highly flexible, efficient resource use, but less control.</li>
                    <li><strong>Virtual Organization:</strong> Small core, outsources functions, highly flexible.</li>
                    <li><strong>Boundaryless Organization:</strong> Seeks to eliminate internal (horizontal/vertical) and external barriers.</li>
                </ul>

                <h3>5. Power, Authority, and Delegation</h3>
                <ul>
                    <li><strong>Power:</strong> Ability to influence others' beliefs/actions.</li>
                    <li><strong>Authority:</strong> The <em>right</em> in a position to exercise discretion/give orders.</li>
                    <li><strong>Bases of Power:</strong>
                        <ul>
                            <li><em>Formal:</em> Legitimate (position), Reward (give benefits), Coercive (punish).</li>
                            <li><em>Personal:</em> Expert (knowledge/skill), Referent (likability/respect).</li>
                        </ul>
                    </li>
                    <li><strong>Dependency:</strong> Key to power; increases when resources controlled are Important, Scarce, Non-substitutable.</li>
                    <li><strong>Power Tactics:</strong> Ways power is translated into action (e.g., Legitimacy, Rational Persuasion, Consultation, Pressure).</li>
                    <li><strong>Line Authority:</strong> Direct supervisor-subordinate relationship.</li>
                    <li><strong>Staff Authority:</strong> Advisory/support relationship (advise line managers).</li>
                    <li><strong>Functional Authority:</strong> Right to control specific processes/policies in <em>other</em> departments.</li>
                    <li><strong>Delegation:</strong> Assigning authority to a subordinate. Requires trust, willingness to let go, allowing mistakes.</li>
                </ul>

                <h3>6. Employee Involvement & Empowerment</h3>
                <ul>
                    <li><strong>Empowerment:</strong> Giving employees power to make decisions without supervisor approval.</li>
                    <li><strong>Employee Involvement:</strong> Participative process using employee input to increase commitment. Forms: Power, Information Sharing, Knowledge/Skills, Rewards.</li>
                    <li><strong>Benefits:</strong> Increased motivation, commitment, productivity, job satisfaction.</li>
                    <li><strong>Shift:</strong> Traditional (layered, control, individual task) -> Empowered (flat, coach, team/process task, shared leadership/info).</li>
                </ul>
            `;
            } else if (weekNumber === '8') {
                notesTitle = 'Week 8 Lecture Notes';
                notesContent = `
                <h2>Week 8: Staffing, Human Resource Management, and Coordination - Key Notes</h2>

                <h3>1. Staffing & Human Resource Management (HRM)</h3>
                <ul>
                    <li><strong>Staffing:</strong> Filling and keeping filled the positions in the organizational structure. Aims for the right people, right place, right time.</li>
                    <li><strong>HRM:</strong> Process involving acquiring, training, appraising, compensating employees, and attending to labor relations, health/safety, and fairness concerns.</li>
                    <li><strong>HRM Importance:</strong> Significant impact on performance, source of competitive advantage (human capital), avoids hiring errors/turnover.</li>
                    <li><strong>HRM Process:</strong> A continuous cycle:
                        <ul>
                            <li>HR Planning (Forecasting Needs)</li>
                            <li>Recruitment (Attracting Applicants)</li>
                            <li>Selection (Choosing Applicants)</li>
                            <li>Orientation & Training (Integrating & Equipping)</li>
                            <li>Performance Management (Evaluating)</li>
                            <li>Compensation & Benefits (Rewarding)</li>
                            <li>Career Development (Retaining & Growing)</li>
                        </ul>
                    </li>
                </ul>

                <h3>2. HR Planning (HRP)</h3>
                <ul>
                    <li><strong>Goal:</strong> Ensure right number & type of people now and in the future; avoid shortages/surpluses.</li>
                    <li><strong>Steps:</strong> Assess current HR -> Assess future HR needs.</li>
                    <li><strong>Job Analysis:</strong> Determining duties of a job and characteristics of people needed. Tools: interviews, questionnaires, observation.</li>
                    <li><strong>Job Description (JD):</strong> Written statement of job content, environment, conditions.</li>
                    <li><strong>Job Specification (JS):</strong> Minimum qualifications (knowledge, skills, abilities) needed.</li>
                    <li><strong>Forecasting Needs:</strong> Trend analysis, ratio analysis, scatter plots.</li>
                </ul>

                <h3>3. Recruitment & Selection</h3>
                <ul>
                    <li><strong>Recruitment:</strong> Locating, identifying, and attracting capable applicants.</li>
                    <li><strong>Sources:</strong> Internal (job posting, promotion, referrals) vs. External (ads, agencies, internet, colleges).</li>
                    <li><strong>Selection:</strong> Screening applicants to choose the most suitable candidates.</li>
                    <li><strong>Selection Process:</strong> Initial Screening -> Substantive Selection -> Contingent Selection.</li>
                    <li><strong>Tools:</strong> Application forms, background checks, written tests, performance simulation tests (work samples, assessment centers), interviews (structured are best), reference checks, drug tests.</li>
                </ul>

                <h3>4. Orientation, Training & Development</h3>
                <ul>
                    <li><strong>Orientation (Socialization):</strong> Introducing new employees to the job and organization (culture, rules, colleagues). Stages: Pre-arrival, Encounter, Metamorphosis.</li>
                    <li><strong>Training:</strong> Giving employees skills/knowledge for their <em>current</em> job. Process: Needs Analysis -> Design -> Develop -> Implement -> Evaluate. Methods: On-the-Job (OJT), Off-the-Job (lectures, simulations), E-learning.</li>
                    <li><strong>Management Development:</strong> Long-term, future-oriented learning for managers.</li>
                </ul>

                <h3>5. Performance Management & Appraisal</h3>
                <ul>
                    <li><strong>Performance Appraisal:</strong> Evaluating employee's current/past performance against standards.</li>
                    <li><strong>Performance Management:</strong> Continuous process to identify, measure, develop, and align performance with organizational goals.</li>
                    <li><strong>Purpose:</strong> Input for HR decisions (promotions), identify training needs, provide feedback, basis for rewards.</li>
                    <li><strong>Methods:</strong> Written Essays, Critical Incidents, Graphic Rating Scales, BARS (Behaviorally Anchored Rating Scales), Forced Comparisons.</li>
                    <li><strong>Improving:</strong> Use multiple raters, train evaluators, provide feedback effectively.</li>
                </ul>

                <h3>6. Compensation & Benefits</h3>
                <ul>
                    <li><strong>Compensation:</strong> All forms of pay/reward (Direct: salary, wages, incentives; Indirect: benefits).</li>
                    <li><strong>Determinants:</strong> Legal, union, policy, equity (internal & external).</li>
                    <li><strong>Incentives:</strong> Pay-for-performance (individual or group-based, e.g., merit pay, profit sharing, ESOPs).</li>
                    <li><strong>Benefits:</strong> Indirect payments (e.g., health insurance, paid time off, retirement plans).</li>
                </ul>

                <h3>7. International HRM</h3>
                <ul>
                    <li><strong>Challenges:</strong> Cultural, political, legal, economic differences; managing expatriates; coordinating globally.</li>
                    <li><strong>Staffing Approaches:</strong> Ethnocentric (home country), Polycentric (host country), Geocentric (global best).</li>
                    <li><strong>Expatriate Management:</strong> Requires careful selection (adaptability, cultural intelligence), orientation/training, compensation considerations, repatriation support.</li>
                </ul>

                <h3>8. Coordination</h3>
                <ul>
                    <li><strong>Definition:</strong> Orderly synchronization of efforts to achieve unified action towards goals. The essence of management.</li>
                    <li><strong>Organization as Open System:</strong> Requires coordination internally (between departments/levels) and externally (with stakeholders).</li>
                    <li><strong>Types:</strong>
                        <ul>
                            <li>Internal (Vertical & Horizontal) vs. External.</li>
                            <li>Based on Interdependence: Pooled (low need), Sequential (medium need), Reciprocal (high need).</li>
                        </ul>
                    </li>
                    <li><strong>Principles:</strong> Early start, direct contact, continuity, reciprocal relationships.</li>
                    <li><strong>Techniques:</strong> Rules/procedures, hierarchy/structure, communication, committees, leadership, special coordinators.</li>
                    <li><strong>Importance:</strong> Essential for smooth interplay of functions, efficiency, effectiveness, and achieving organizational objectives.</li>
                </ul>
            `;
            }

            const notesContainer = document.createElement('div');
            notesContainer.className = 'week-notes-container';

            // Create toggle button
            const toggleButton = document.createElement('button');
            toggleButton.className = 'week-notes-toggle';
            toggleButton.type = 'button';
            toggleButton.innerHTML = `${notesTitle} <span class="toggle-icon">▼</span>`;

            // Create notes content container
            const notesContentDiv = document.createElement('div');
            notesContentDiv.className = 'week-notes-content';

            // Add markdown content
            const markdownContent = document.createElement('div');
            markdownContent.className = 'week-notes-markdown';
            markdownContent.innerHTML = notesContent;

            // Add content to container
            notesContentDiv.appendChild(markdownContent);
            notesContainer.appendChild(toggleButton);
            notesContainer.appendChild(notesContentDiv);

            // Add toggle functionality
            toggleButton.addEventListener('click', function() {
                notesContentDiv.classList.toggle('expanded');
                toggleButton.classList.toggle('expanded');
            });

            // Add notes container to content container
            contentContainer.appendChild(notesContainer);
        }

        // Question & Answer sections
        weekData.questions.forEach((question, index) => {
            const questionSection = document.createElement('div');
            questionSection.className = 'learning-section';

            const questionNumber = document.createElement('div');
            questionNumber.className = 'learning-number';
            questionNumber.textContent = `${index + 1}`;

            const questionContent = document.createElement('div');
            questionContent.className = 'learning-content-item';

            const questionText = document.createElement('h3');
            questionText.className = 'learning-question';
            questionText.textContent = question.question;

            // Add a note for multiple correct answers
            if (Array.isArray(question.correctAnswer) && question.correctAnswer.length > 1) {
                const multipleCorrectNote = document.createElement('p');
                multipleCorrectNote.className = 'multiple-correct-note';
                multipleCorrectNote.textContent = 'Multiple correct answers';
                questionContent.appendChild(multipleCorrectNote);
            }

            const answerContainer = document.createElement('div');
            answerContainer.className = 'learning-answer-container';

            // Display all options
            question.options.forEach(option => {
                const optionElement = document.createElement('div');
                optionElement.className = 'learning-option';

                // Highlight correct answer(s)
                if (Array.isArray(question.correctAnswer)) {
                    // For multiple correct answers
                    if (question.correctAnswer.includes(option)) {
                        optionElement.classList.add('correct-answer');
                    }
                } else {
                    // For single correct answer
                    if (option === question.correctAnswer) {
                        optionElement.classList.add('correct-answer');
                    }
                }

                optionElement.textContent = option;
                answerContainer.appendChild(optionElement);
            });

            questionContent.appendChild(questionText);
            questionContent.appendChild(answerContainer);

            questionSection.appendChild(questionNumber);
            questionSection.appendChild(questionContent);

            contentContainer.appendChild(questionSection);
        });

        weekMaterials.appendChild(contentContainer);

        // Add Practice button at the bottom
        const practiceButtonContainer = document.createElement('div');
        practiceButtonContainer.className = 'practice-button-container';

        const practiceButton = document.createElement('button');
        practiceButton.className = 'practice-btn';
        practiceButton.innerHTML = 'Practice <span class="arrow-icon">→</span>';
        practiceButton.type = 'button';

        practiceButton.addEventListener('click', function() {
            startQuizForWeek(weekNumber);
        });

        practiceButtonContainer.appendChild(practiceButton);
        contentContainer.appendChild(practiceButtonContainer);

        // Hide week selection and show learning content
        weekSelection.classList.add('hidden');
        learningContent.classList.remove('hidden');

        // Initialize audio player if it's Week 1
        if (weekNumber === '1') {
            initAudioPlayer();
        }
    }

    // Function to initialize the audio player
    function initAudioPlayer() {
        const audio = document.getElementById('lecture-audio');
        if (!audio) return;

        const playPauseBtn = document.getElementById('play-pause-btn');
        const speedBtn = document.getElementById('speed-btn');
        const progress = document.querySelector('.audio-progress');
        const progressFilled = document.querySelector('.audio-progress-filled');
        const timeDisplay = document.querySelector('.audio-time');

        // Play/Pause functionality
        playPauseBtn.addEventListener('click', togglePlayPause);

        function togglePlayPause() {
            if (audio.paused) {
                audio.play();
                playPauseBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
            } else {
                audio.pause();
                playPauseBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
            }
        }

        // Speed control functionality - cycle through speeds
        const speeds = [1.0, 1.25, 1.5, 1.75, 2.0];
        let currentSpeedIndex = 0;

        speedBtn.addEventListener('click', function() {
            // Move to next speed in the cycle
            currentSpeedIndex = (currentSpeedIndex + 1) % speeds.length;
            const newSpeed = speeds[currentSpeedIndex];

            // Update audio playback rate
            audio.playbackRate = newSpeed;

            // Update button text
            speedBtn.textContent = newSpeed.toFixed(2).replace(/\.00$/, '') + 'x';
        });

        // Update progress bar
        audio.addEventListener('timeupdate', updateProgress);

        function updateProgress() {
            const percent = (audio.currentTime / audio.duration) * 100;
            progressFilled.style.width = `${percent}%`;

            // Update time display
            const currentMinutes = Math.floor(audio.currentTime / 60);
            const currentSeconds = Math.floor(audio.currentTime % 60);
            const durationMinutes = Math.floor(audio.duration / 60) || 0;
            const durationSeconds = Math.floor(audio.duration % 60) || 0;

            timeDisplay.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds} / ${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;
        }

        // Click on progress bar to seek
        progress.addEventListener('click', function(e) {
            const progressRect = this.getBoundingClientRect();
            const percent = (e.clientX - progressRect.left) / progressRect.width;
            audio.currentTime = percent * audio.duration;
        });

        // Handle audio end
        audio.addEventListener('ended', function() {
            playPauseBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
        });

        // Load metadata to display duration
        audio.addEventListener('loadedmetadata', function() {
            updateProgress();
        });
    }

    // Function to start quiz for a specific week
    function startQuizForWeek(weekNumber) {
        // Get the week data
        const weekData = quizData[`week${weekNumber}`];

        if (!weekData) {
            alert('Week data not found!');
            return;
        }

        // Apply scramble settings from global settings
        let questions = JSON.parse(JSON.stringify(weekData.questions));

        // Apply scramble questions if enabled
        if (scrambleQuestions) {
            questions = shuffleArray(questions);
        }

        // Create the quiz data
        const currentQuizData = {
            title: weekData.title,
            date: weekData.date,
            questions: questions
        };

        // Save the quiz data to localStorage
        localStorage.setItem('nptel_currentQuiz', JSON.stringify(currentQuizData));

        // Navigate to the quiz page
        window.location.href = 'quiz.html';
    }
});