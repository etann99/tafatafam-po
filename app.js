// Global state - stored in memory (NOT localStorage due to sandbox restrictions)
let appState = {
  user: {
    genre: null,
    statut: null,
    age: null
  },
  completedModules: [],
  quizScores: {},
  testScores: {},
  currentModule: null,
  lucidityScore: 0
};

// Module data
const modulesData = {
  tier0: [
    {
      id: 'bio101',
      title: "Biologie de l'Amour 101",
      duration: '15 min',
      description: "Comprendre les mécanismes biologiques de l'amour",
      tier: 'tier0'
    },
    {
      id: 'constructions',
      title: 'Constructions Culturelles',
      duration: '20 min',
      description: "L'amour-passion vs l'amour-contrat",
      tier: 'tier0'
    },
    {
      id: 'facebook',
      title: "L'Amour-Facebook à Madagascar",
      duration: '18 min',
      description: 'Comment Facebook transforme l\'amour',
      tier: 'tier0'
    }
  ],
  tier1a: [
    {
      id: 'drague-amour',
      title: 'Distinction Drague vs Amour',
      duration: '12 min',
      description: 'Deux choses bien différentes',
      tier: 'tier1a'
    },
    {
      id: 'saine-attirance',
      title: "Signes d'une Saine Attirance",
      duration: '15 min',
      description: 'Curiosité vs obsession',
      tier: 'tier1a'
    }
  ],
  tier1b: [
    {
      id: 'deconstruction',
      title: 'Déconstruction de Ma Dernière Relation',
      duration: '20 min',
      description: "Analyser ce qui s'est passé",
      tier: 'tier1b'
    },
    {
      id: 'cycles-toxiques',
      title: 'Sortir des Cycles Toxiques',
      duration: '25 min',
      description: 'Reconnaître et briser les patterns',
      tier: 'tier1b'
    },
    {
      id: 'estime-soi',
      title: "Reconstruire l'Estime de Soi",
      duration: '18 min',
      description: 'Après une relation difficile',
      tier: 'tier1b'
    }
  ],
  tier2a: [
    {
      id: 'reconnaitre-toxicite',
      title: 'Reconnaître la Toxicité',
      duration: '20 min',
      description: "Les signes d'une relation toxique",
      tier: 'tier2a'
    },
    {
      id: 'drapeaux-facebook',
      title: 'Drapeaux Rouges sur Facebook',
      duration: '15 min',
      description: 'Contrôle numérique et surveillance',
      tier: 'tier2a'
    }
  ],
  tier2b: [
    {
      id: 'confiance-controle',
      title: 'Confiance vs. Contrôle',
      duration: '22 min',
      description: 'La différence fondamentale',
      tier: 'tier2b'
    },
    {
      id: 'authenticite',
      title: 'Authenticité dans la Relation',
      duration: '18 min',
      description: 'Communication réelle et vulnérabilité',
      tier: 'tier2b'
    },
    {
      id: 'au-dela',
      title: 'Au-delà des Deux Modèles',
      duration: '20 min',
      description: "Créer votre propre forme d'amour",
      tier: 'tier2b'
    }
  ]
};

// Module content
const moduleContent = {
  'bio101': {
    title: "Biologie de l'Amour 101",
    duration: '15 min',
    description: "Comprendre les mécanismes biologiques de l'amour",
    sections: [
      {
        title: 'Introduction',
        content: `<p>L'amour n'est pas magique. Il repose sur des mécanismes biologiques précis, hérités de millions d'années d'évolution. Comprendre ces mécanismes, c'est commencer à reprendre le contrôle.</p>
        <p>Dans ce module, nous allons explorer la base scientifique de ce que nous appelons "l'amour" - non pas pour le réduire ou le diminuer, mais pour mieux le comprendre et éviter d'en être la victime.</p>`
      },
      {
        title: "L'Instinct de Reproduction",
        content: `<p>Tous les êtres vivants partagent un instinct fondamental : <strong>se reproduire</strong>. Chez les humains, cet instinct s'accompagne de sentiments complexes que nous appelons "l'amour".</p>
        <div class="info-box">
          <strong>💡 Point clé</strong>
          <p>Ce que nous ressentons comme de l'amour est souvent notre biologie qui nous pousse vers la reproduction. Ce n'est ni romantique ni mystérieux - c'est de la biologie.</p>
        </div>
        <p>Cela ne signifie pas que l'amour n'est "que" de la biologie. Mais comprendre cette base vous aide à ne pas être aveuglé par vos hormones.</p>`
      },
      {
        title: 'Sélection Naturelle et Attraction',
        content: `<p>Dans la nature, les femelles choisissent généralement les mâles qui présentent les meilleurs critères : force, santé, statut, ressources. C'est ce qu'on appelle la <strong>sélection sexuelle</strong>.</p>
        <p>Chez les humains :</p>
        <ul>
          <li>Les femmes sont biologiquement attirées par des hommes qui démontrent des capacités de protection et de provision</li>
          <li>Les hommes sont biologiquement attirés par des signes de santé et de fertilité</li>
          <li>Ces tendances existent indépendamment de notre éducation ou culture</li>
        </ul>
        <p>À Madagascar comme ailleurs, ces mécanismes biologiques influencent nos choix amoureux - même si nous n'en sommes pas conscients.</p>`
      },
      {
        title: 'Les Mécanismes Neuronaux',
        content: `<p>Quand tu tombes amoureux, ton cerveau libère des substances chimiques spécifiques :</p>
        <ul>
          <li><strong>Dopamine</strong> : Crée le sentiment d'euphorie et de plaisir</li>
          <li><strong>Ocytocine</strong> : Hormone de l'attachement (libérée pendant le contact physique)</li>
          <li><strong>Sérotonine</strong> : Diminue quand on est amoureux (d'où les pensées obsessionnelles)</li>
          <li><strong>Adrénaline</strong> : Provoque les palpitations, la nervosité</li>
        </ul>
        <div class="info-box">
          <strong>⚠️ Attention</strong>
          <p>Ces réactions chimiques sont temporaires. La phase "passionnée" dure généralement 6-24 mois. Après, le cerveau retourne à son état normal. C'est pourquoi tant de relations se terminent après cette période.</p>
        </div>`
      },
      {
        title: 'Ce que cela signifie pour toi',
        content: `<p>Comprendre la biologie de l'amour te permet de :</p>
        <ul>
          <li>Ne pas confondre l'attirance chimique avec un "amour véritable"</li>
          <li>Reconnaître quand tes hormones obscurcissent ton jugement</li>
          <li>Prendre des décisions plus lucides sur tes relations</li>
          <li>Ne pas t'accrocher à quelqu'un juste parce que ton cerveau libère de la dopamine</li>
        </ul>
        <p>L'amour n'est pas une chose mystérieuse qui "arrive". C'est un processus biologique que tu peux comprendre et, dans une certaine mesure, contrôler.</p>`
      }
    ],
    quiz: [
      {
        question: "L'amour est-il principalement un sentiment mystérieux ou un mécanisme biologique ?",
        options: [
          'Un sentiment mystérieux qui échappe à la science',
          'Un mécanisme biologique lié à la reproduction',
          'Un mélange égal des deux',
          'Uniquement une construction sociale'
        ],
        correct: 1
      },
      {
        question: 'Pourquoi les femelles ont-elles tendance à être plus sélectives dans le choix de partenaire ?',
        options: [
          'Par éducation culturelle uniquement',
          'Parce qu\'elles investissent plus dans la reproduction (grossesse, allaitement)',
          'Par manque de confiance en elles',
          'Il n\'y a pas de différence, c\'est un mythe'
        ],
        correct: 1
      },
      {
        question: 'Combien de temps dure généralement la phase "passionnée" de l\'amour ?',
        options: [
          'Toute la vie si c\'est le vrai amour',
          '3-6 mois maximum',
          '6-24 mois environ',
          'Elle ne se termine jamais'
        ],
        correct: 2
      },
      {
        question: 'Quelle hormone est responsable du sentiment d\'attachement ?',
        options: [
          'Dopamine',
          'Adrénaline',
          'Ocytocine',
          'Testostérone'
        ],
        correct: 2
      },
      {
        question: 'Que devrait te permettre de comprendre la biologie de l\'amour ?',
        options: [
          'De manipuler les autres plus facilement',
          'De ne jamais tomber amoureux',
          'De prendre des décisions plus lucides sur tes relations',
          'De prouver que l\'amour n\'existe pas'
        ],
        correct: 2
      }
    ]
  },
  'constructions': {
    title: 'Constructions Culturelles',
    duration: '20 min',
    description: "L'amour-passion vs l'amour-contrat",
    sections: [
      {
        title: 'Introduction',
        content: `<p>L'amour tel que nous le connaissons aujourd'hui n'a pas toujours existé. Il est en grande partie une <strong>construction culturelle</strong> qui varie selon les époques et les sociétés.</p>
        <p>À Madagascar, deux modèles coexistent et entrent souvent en conflit : l'amour-passion (importé d'Occident via les médias) et l'amour-contrat (modèle traditionnel malgache).</p>`
      },
      {
        title: 'Le Modèle Traditionnel : L\'Amour-Contrat',
        content: `<p>Dans le modèle traditionnel malgache :</p>
        <ul>
          <li>Le mariage est avant tout une <strong>alliance entre familles</strong></li>
          <li>L'amour romantique n'est pas le critère principal</li>
          <li>La stabilité, le respect mutuel et les responsabilités familiales priment</li>
          <li>Le choix des partenaires implique les parents et la communauté</li>
        </ul>
        <div class="info-box">
          <strong>📚 Contexte historique</strong>
          <p>Ce modèle a fonctionné pendant des siècles car il créait des structures sociales stables. L'amour romantique était vu comme trop instable pour fonder une famille.</p>
        </div>`
      },
      {
        title: 'Le Modèle Occidental : L\'Amour-Passion',
        content: `<p>Le modèle occidental moderne, véhiculé par les films et réseaux sociaux :</p>
        <ul>
          <li>L'amour romantique est LA raison de se mettre en couple</li>
          <li>"Suivre son cœur" est présenté comme la plus haute valeur</li>
          <li>Le couple doit être fusionnel, exclusif, passionné</li>
          <li>Si la passion disparaît, la relation n'a plus de sens</li>
        </ul>
        <p>Ce modèle crée des attentes irréalistes :</p>
        <ul>
          <li>Trouver "l'âme sœur" parfaite</li>
          <li>Maintenir la passion initiale toute la vie</li>
          <li>Que l'amour "suffit" pour surmonter tous les obstacles</li>
        </ul>`
      },
      {
        title: 'Le Conflit à Madagascar',
        content: `<p>Les jeunes malgaches aujourd'hui sont coincés entre :</p>
        <ul>
          <li>Les attentes familiales (modèle traditionnel)</li>
          <li>Les désirs personnels influencés par les médias (modèle passion)</li>
          <li>La réalité économique qui limite les choix</li>
        </ul>
        <div class="info-box">
          <strong>💔 Conséquence</strong>
          <p>Beaucoup de jeunes vivent des relations "Facebook" (passion apparente) tout en cachant la réalité à leur famille, créant un double standard épuisant.</p>
        </div>`
      },
      {
        title: 'Vers une Troisième Voie',
        content: `<p>Ni l'amour-passion aveugle ni l'amour-contrat rigide ne sont des solutions parfaites. Une approche lucide combinerait :</p>
        <ul>
          <li>La reconnaissance des sentiments (aspect passion)</li>
          <li>Mais avec lucidité sur leur nature temporaire</li>
          <li>L'importance de la compatibilité pratique (aspect contrat)</li>
          <li>Tout en respectant le choix individuel</li>
          <li>La construction consciente d'une relation stable</li>
        </ul>
        <p>L'objectif : choisir consciemment plutôt que d'être porté par les hormones ou contraint par la tradition.</p>`
      }
    ],
    quiz: [
      {
        question: 'Dans le modèle traditionnel malgache, quelle est la priorité principale du mariage ?',
        options: [
          'L\'amour romantique passionné',
          'L\'alliance entre familles et la stabilité',
          'La beauté physique',
          'La passion sexuelle'
        ],
        correct: 1
      },
      {
        question: 'Quel est le problème principal du modèle "amour-passion" ?',
        options: [
          'Il nie complètement les sentiments',
          'Il crée des attentes irréalistes difficiles à maintenir',
          'Il est trop rigide',
          'Il implique trop la famille'
        ],
        correct: 1
      },
      {
        question: 'Pourquoi beaucoup de jeunes malgaches vivent-ils un "double standard" ?',
        options: [
          'Par paresse',
          'Parce qu\'ils mentent naturellement',
          'Parce qu\'ils sont coincés entre attentes familiales et désirs personnels',
          'Parce que c\'est la mode'
        ],
        correct: 2
      }
    ]
  },
  'drague-amour': {
    title: 'Distinction Drague vs Amour',
    duration: '12 min',
    description: 'Deux choses bien différentes',
    sections: [
      {
        title: 'La Confusion Courante',
        content: `<p>Beaucoup de jeunes confondent la <strong>drague</strong> (l'art de séduire pour obtenir une relation, souvent sexuelle) avec <strong>l'amour</strong> (un sentiment d'attachement profond).</p>
        <div class="info-box">
          <strong>⚠️ Piège courant</strong>
          <p>Quelqu'un peut être très doué en drague (compliments, attention, promesses) sans ressentir aucun amour réel. La drague est une compétence, pas un sentiment.</p>
        </div>`
      },
      {
        title: 'Caractéristiques de la Drague',
        content: `<ul>
          <li>Objectif à court terme (obtenir attention, sexe, validation)</li>
          <li>Comportement calculé et stratégique</li>
          <li>Compliments exagérés et promesses rapides</li>
          <li>Insistance sur l'apparence physique</li>
          <li>Disparaît après avoir obtenu ce qu'il/elle voulait</li>
        </ul>`
      },
      {
        title: 'Caractéristiques de l\'Amour Authentique',
        content: `<ul>
          <li>Se développe progressivement dans le temps</li>
          <li>Intérêt pour la personne dans sa globalité</li>
          <li>Acceptation des défauts et imperfections</li>
          <li>Engagement et constance dans le temps</li>
          <li>Volonté de compromis et d'efforts mutuels</li>
        </ul>`
      }
    ],
    quiz: [
      {
        question: 'Quelle est la différence principale entre drague et amour ?',
        options: [
          'Il n\'y en a pas, c\'est la même chose',
          'La drague est une stratégie à court terme, l\'amour se construit dans le temps',
          'La drague est pour les hommes, l\'amour pour les femmes',
          'L\'amour est plus physique'
        ],
        correct: 1
      }
    ]
  }
};

// Test data
const testsData = {
  'lucidite': {
    title: 'Test de Lucidité Amoureuse',
    questions: [
      {
        question: 'Tu es attiré(e) par quelqu\'un. Quelle est ta première réaction ?',
        options: [
          'Je pense qu\'il/elle est "l\'âme sœur"',
          'J\'observe si nous sommes compatibles au-delà de l\'attraction',
          'Je me lance immédiatement dans une relation',
          'Je crois que l\'amour surmontera tous les obstacles'
        ],
        lucidite_score: [0, 5, 1, 0]
      },
      {
        question: 'Comment vois-tu la passion amoureuse initiale ?',
        options: [
          'C\'est le vrai amour qui durera toujours',
          'C\'est une phase temporaire basée sur des hormones',
          'Si elle diminue, la relation est finie',
          'Elle doit être constante pour que ce soit de l\'amour'
        ],
        lucidite_score: [0, 5, 1, 0]
      },
      {
        question: 'Ton/ta partenaire te demande de couper contact avec tous tes ami(e)s du sexe opposé. Tu penses :',
        options: [
          'C\'est normal, c\'est une preuve d\'amour',
          'C\'est un signe de contrôle toxique, je refuse',
          'Je le fais pour lui/elle faire plaisir',
          'C\'est de la jalousie mais c\'est mignon'
        ],
        lucidite_score: [0, 5, 1, 0]
      },
      {
        question: 'Sur Facebook, ton/ta partenaire surveille toutes tes publications et likes. Tu réagis comment ?',
        options: [
          'C\'est normal, c\'est parce qu\'il/elle m\'aime',
          'C\'est du contrôle abusif, je pose des limites',
          'Je cache mes activités pour éviter les disputes',
          'Je trouve ça flatteur'
        ],
        lucidite_score: [0, 5, 1, 0]
      },
      {
        question: 'Comment comprends-tu l\'origine de l\'attraction amoureuse ?',
        options: [
          'C\'est magique et mystérieux',
          'C\'est un mélange de biologie, culture et choix personnel',
          'C\'est uniquement du destin',
          'C\'est purement physique'
        ],
        lucidite_score: [0, 5, 0, 2]
      }
    ]
  }
};

// Navigation functions
function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  
  // Show target page
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
    
    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
    });
    
    // Load page-specific content
    if (pageId === 'dashboard-page') {
      loadDashboard();
    } else if (pageId === 'modules-page') {
      loadModulesPage();
    } else if (pageId === 'profile-page') {
      loadProfilePage();
    }
  }
}

function showOnboarding() {
  showPage('onboarding-page');
}

// Onboarding
document.addEventListener('DOMContentLoaded', function() {
  const onboardingForm = document.getElementById('onboarding-form');
  if (onboardingForm) {
    onboardingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const formData = new FormData(e.target);
      appState.user.genre = formData.get('genre');
      appState.user.statut = formData.get('statut');
      appState.user.age = formData.get('age');
      
      // Navigate to dashboard
      showPage('dashboard-page');
      loadDashboard();
    });
  }
});

// Dashboard functions
function loadDashboard() {
  // Update progress
  updateProgress();
  
  // Load recommended modules
  loadRecommendedModules();
  
  // Load all modules by tier
  loadModulesByTier('tier0', 'tier0-modules');
  loadModulesByTier('tier1a', 'tier1a-modules');
  loadModulesByTier('tier1b', 'tier1b-modules');
  loadModulesByTier('tier2a', 'tier2a-modules');
  loadModulesByTier('tier2b', 'tier2b-modules');
}

function updateProgress() {
  const totalModules = Object.values(modulesData).flat().length;
  const completedCount = appState.completedModules.length;
  const progressPercent = Math.round((completedCount / totalModules) * 100);
  
  document.getElementById('progress-value').textContent = `${progressPercent}/100`;
  document.getElementById('progress-fill').style.width = `${progressPercent}%`;
  document.getElementById('completed-modules').textContent = completedCount;
  document.getElementById('total-modules').textContent = totalModules;
  
  appState.lucidityScore = progressPercent;
}

function loadRecommendedModules() {
  const container = document.getElementById('recommended-modules');
  if (!container) return;
  
  const statut = appState.user.statut;
  let recommendedTiers = ['tier0']; // Everyone gets tier0
  
  // Add specific tiers based on status
  if (statut === 'celibataire-sans') {
    recommendedTiers.push('tier1a');
  } else if (statut === 'celibataire-avec') {
    recommendedTiers.push('tier1b');
  } else if (statut === 'couple-trad' || statut === 'couple-ameliorer' || statut === 'marie') {
    recommendedTiers.push('tier2b');
  }
  
  // Get modules from recommended tiers
  const recommendedModules = [];
  recommendedTiers.forEach(tier => {
    if (modulesData[tier]) {
      recommendedModules.push(...modulesData[tier].slice(0, 2));
    }
  });
  
  container.innerHTML = recommendedModules.map(module => createModuleCard(module)).join('');
}

function loadModulesByTier(tier, containerId) {
  const container = document.getElementById(containerId);
  if (!container || !modulesData[tier]) return;
  
  container.innerHTML = modulesData[tier].map(module => createModuleCard(module)).join('');
}

function createModuleCard(module) {
  const isCompleted = appState.completedModules.includes(module.id);
  const completedClass = isCompleted ? 'completed' : '';
  
  return `
    <div class="module-card ${completedClass}" onclick="openModule('${module.id}')">
      <div class="module-header">
        <span class="module-duration">${module.duration}</span>
      </div>
      <h4 class="module-title">${module.title}</h4>
      <p class="module-description">${module.description}</p>
    </div>
  `;
}

function openModule(moduleId) {
  appState.currentModule = moduleId;
  const content = moduleContent[moduleId];
  
  if (!content) {
    alert('Ce module n\'est pas encore disponible.');
    return;
  }
  
  showPage('module-detail-page');
  renderModuleContent(content, moduleId);
}

function renderModuleContent(content, moduleId) {
  const container = document.getElementById('module-content');
  
  const sectionsHtml = content.sections.map(section => `
    <div class="module-section">
      <h3 class="section-title">${section.title}</h3>
      <div class="section-content">${section.content}</div>
    </div>
  `).join('');
  
  const quizHtml = content.quiz ? `
    <div class="quiz-section" id="module-quiz">
      <h3>Quiz de Compréhension</h3>
      <p>Teste ta compréhension de ce module</p>
      <div id="quiz-questions"></div>
      <div class="quiz-actions">
        <button class="btn btn--primary" onclick="submitModuleQuiz()">Soumettre mes réponses</button>
      </div>
      <div id="quiz-result" class="quiz-result" style="display: none;"></div>
    </div>
  ` : '';
  
  container.innerHTML = `
    <button class="btn btn--secondary module-back" onclick="showPage('dashboard-page')">
      ← Retour aux modules
    </button>
    <div class="module-detail-header">
      <h1 class="module-detail-title">${content.title}</h1>
      <div class="module-meta">
        <span>⏱️ ${content.duration}</span>
        <span>📖 ${content.sections.length} sections</span>
      </div>
      <p>${content.description}</p>
    </div>
    ${sectionsHtml}
    ${quizHtml}
  `;
  
  if (content.quiz) {
    renderQuiz(content.quiz, moduleId);
  }
}

function renderQuiz(quiz, moduleId) {
  const container = document.getElementById('quiz-questions');
  
  container.innerHTML = quiz.map((q, index) => `
    <div class="quiz-question">
      <p class="quiz-question-text"><strong>Question ${index + 1}:</strong> ${q.question}</p>
      <div class="quiz-options">
        ${q.options.map((option, optIndex) => `
          <label class="quiz-option" data-question="${index}" data-option="${optIndex}">
            <input type="radio" name="question-${index}" value="${optIndex}">
            ${option}
          </label>
        `).join('')}
      </div>
    </div>
  `).join('');
  
  // Add click handlers to options
  container.querySelectorAll('.quiz-option').forEach(option => {
    option.addEventListener('click', function() {
      const questionIndex = this.dataset.question;
      // Remove selected class from siblings
      container.querySelectorAll(`[data-question="${questionIndex}"]`).forEach(opt => {
        opt.classList.remove('selected');
      });
      // Add selected class to this option
      this.classList.add('selected');
      // Check the radio
      this.querySelector('input').checked = true;
    });
  });
}

function submitModuleQuiz() {
  const moduleId = appState.currentModule;
  const content = moduleContent[moduleId];
  const quiz = content.quiz;
  
  let score = 0;
  let allAnswered = true;
  
  quiz.forEach((q, index) => {
    const selected = document.querySelector(`input[name="question-${index}"]:checked`);
    if (!selected) {
      allAnswered = false;
    } else if (parseInt(selected.value) === q.correct) {
      score++;
    }
  });
  
  if (!allAnswered) {
    alert('Merci de répondre à toutes les questions !');
    return;
  }
  
  // Mark correct/incorrect
  quiz.forEach((q, index) => {
    const selected = document.querySelector(`input[name="question-${index}"]:checked`);
    if (selected) {
      const optionElement = selected.closest('.quiz-option');
      if (parseInt(selected.value) === q.correct) {
        optionElement.classList.add('correct');
      } else {
        optionElement.classList.add('incorrect');
        // Also highlight the correct answer
        const correctOption = document.querySelector(`[data-question="${index}"][data-option="${q.correct}"]`);
        if (correctOption) correctOption.classList.add('correct');
      }
    }
  });
  
  const percentage = Math.round((score / quiz.length) * 100);
  const passed = percentage >= 60;
  
  // Save score
  appState.quizScores[moduleId] = { score: percentage, passed };
  
  // Mark module as completed if passed
  if (passed && !appState.completedModules.includes(moduleId)) {
    appState.completedModules.push(moduleId);
  }
  
  // Show result
  const resultDiv = document.getElementById('quiz-result');
  resultDiv.style.display = 'block';
  resultDiv.innerHTML = `
    <div class="quiz-score">${percentage}%</div>
    <p><strong>${passed ? '🎉 Bravo !' : '💪 Continue tes efforts'}</strong></p>
    <p>Tu as répondu correctement à ${score} questions sur ${quiz.length}.</p>
    ${passed ? '<p>Ce module est maintenant marqué comme terminé !</p>' : '<p>Relis le contenu et réessaie pour atteindre 60%.</p>'}
    <div style="margin-top: 20px;">
      <button class="btn btn--primary" onclick="showPage('dashboard-page')">Retour au tableau de bord</button>
      ${!passed ? '<button class="btn btn--secondary" onclick="location.reload()">Réessayer</button>' : ''}
    </div>
  `;
  
  // Scroll to result
  resultDiv.scrollIntoView({ behavior: 'smooth' });
}

// Modules page
function loadModulesPage() {
  const container = document.getElementById('all-modules-list');
  if (!container) return;
  
  const allModules = Object.values(modulesData).flat();
  
  const html = `
    <div class="module-category">
      <div class="modules-grid">
        ${allModules.map(module => createModuleCard(module)).join('')}
      </div>
    </div>
  `;
  
  container.innerHTML = html;
}

function filterModules(filter) {
  // Update active filter button
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
  
  const allModules = Object.values(modulesData).flat();
  let filteredModules = allModules;
  
  if (filter === 'completed') {
    filteredModules = allModules.filter(m => appState.completedModules.includes(m.id));
  } else if (filter === 'in-progress') {
    filteredModules = allModules.filter(m => !appState.completedModules.includes(m.id));
  }
  
  const container = document.getElementById('all-modules-list');
  container.innerHTML = `
    <div class="module-category">
      <div class="modules-grid">
        ${filteredModules.length > 0 ? filteredModules.map(module => createModuleCard(module)).join('') : '<p class="text-muted">Aucun module dans cette catégorie</p>'}
      </div>
    </div>
  `;
}

// Tests & Evaluation
function startTest(testType) {
  const test = testsData[testType];
  if (!test) {
    alert('Ce test n\'est pas encore disponible.');
    return;
  }
  
  showPage('test-page');
  renderTest(test, testType);
}

function renderTest(test, testType) {
  const container = document.getElementById('test-content');
  
  const questionsHtml = test.questions.map((q, index) => `
    <div class="quiz-question">
      <p class="quiz-question-text"><strong>Question ${index + 1}/${test.questions.length}:</strong> ${q.question}</p>
      <div class="quiz-options">
        ${q.options.map((option, optIndex) => `
          <label class="quiz-option" data-question="${index}" data-option="${optIndex}">
            <input type="radio" name="test-question-${index}" value="${optIndex}">
            ${option}
          </label>
        `).join('')}
      </div>
    </div>
  `).join('');
  
  container.innerHTML = `
    <button class="btn btn--secondary module-back" onclick="showPage('evaluation-page')">
      ← Retour aux tests
    </button>
    <h1>${test.title}</h1>
    <p class="page-intro">Réponds honnêtement à toutes les questions pour obtenir un résultat précis.</p>
    <div class="quiz-section">
      ${questionsHtml}
      <div class="quiz-actions">
        <button class="btn btn--primary" onclick="submitTest('${testType}')">Voir mes résultats</button>
      </div>
    </div>
  `;
  
  // Add click handlers
  container.querySelectorAll('.quiz-option').forEach(option => {
    option.addEventListener('click', function() {
      const questionIndex = this.dataset.question;
      container.querySelectorAll(`[data-question="${questionIndex}"]`).forEach(opt => {
        opt.classList.remove('selected');
      });
      this.classList.add('selected');
      this.querySelector('input').checked = true;
    });
  });
}

function submitTest(testType) {
  const test = testsData[testType];
  let totalScore = 0;
  let allAnswered = true;
  
  test.questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="test-question-${index}"]:checked`);
    if (!selected) {
      allAnswered = false;
    } else {
      const optionIndex = parseInt(selected.value);
      if (q.lucidite_score) {
        totalScore += q.lucidite_score[optionIndex];
      }
    }
  });
  
  if (!allAnswered) {
    alert('Merci de répondre à toutes les questions !');
    return;
  }
  
  const maxScore = test.questions.reduce((sum, q) => {
    return sum + Math.max(...(q.lucidite_score || [0]));
  }, 0);
  
  const percentage = Math.round((totalScore / maxScore) * 100);
  
  // Save score
  appState.testScores[testType] = percentage;
  
  // Show results
  showPage('evaluation-page');
  displayTestResults(testType, percentage);
}

function displayTestResults(testType, score) {
  const resultsSection = document.getElementById('test-results-section');
  const resultsContent = document.getElementById('test-results-content');
  
  let interpretation = '';
  let recommendations = [];
  
  if (testType === 'lucidite') {
    if (score >= 80) {
      interpretation = 'Excellente lucidité ! Tu as une compréhension solide des mécanismes de l\'amour.';
      recommendations = ['Continue d\'approfondir avec les modules avancés', 'Partage tes connaissances avec tes pairs'];
    } else if (score >= 60) {
      interpretation = 'Bonne base de lucidité. Tu comprends les concepts mais peux encore progresser.';
      recommendations = ['Révise les modules Tier 0', 'Pratique l\'application de ces concepts dans la vraie vie'];
    } else if (score >= 40) {
      interpretation = 'Lucidité en développement. Continue ton parcours d\'apprentissage.';
      recommendations = ['Reprends les modules de fondation', 'Prends le temps de bien assimiler chaque concept'];
    } else {
      interpretation = 'La lucidité amoureuse demande du travail. C\'est normal, c\'est un processus !';
      recommendations = ['Commence par le module Biologie de l\'Amour 101', 'Prends ton temps, il n\'y a pas d\'urgence'];
    }
  }
  
  resultsContent.innerHTML = `
    <div class="test-score-display">
      <div class="test-score-value">${score}</div>
      <div class="test-score-label">Score de Lucidité</div>
    </div>
    <div class="test-interpretation">
      <h3>Interprétation</h3>
      <p>${interpretation}</p>
    </div>
    <div class="test-recommendations">
      <h3>Recommandations</h3>
      <ul>
        ${recommendations.map(rec => `<li>${rec}</li>`).join('')}
      </ul>
    </div>
    <button class="btn btn--primary" onclick="showPage('dashboard-page')">Retour au tableau de bord</button>
  `;
  
  resultsSection.style.display = 'block';
  resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// Profile page
function loadProfilePage() {
  // Load profile info
  const profileInfo = document.getElementById('profile-info');
  if (profileInfo) {
    const statutLabels = {
      'celibataire-sans': 'Célibataire sans expérience',
      'celibataire-avec': 'Célibataire avec expériences passées',
      'couple-trad': 'En couple (relation traditionnelle)',
      'couple-ameliorer': 'En couple (cherche à améliorer)',
      'marie': 'Marié(e)'
    };
    
    profileInfo.innerHTML = `
      <div class="profile-field">
        <span class="profile-field-label">Genre</span>
        <span class="profile-field-value">${appState.user.genre || 'Non défini'}</span>
      </div>
      <div class="profile-field">
        <span class="profile-field-label">Statut relationnel</span>
        <span class="profile-field-value">${statutLabels[appState.user.statut] || 'Non défini'}</span>
      </div>
      <div class="profile-field">
        <span class="profile-field-label">Âge</span>
        <span class="profile-field-value">${appState.user.age || 'Non défini'} ans</span>
      </div>
    `;
  }
  
  // Update stats
  document.getElementById('stat-modules').textContent = appState.completedModules.length;
  document.getElementById('stat-tests').textContent = Object.keys(appState.testScores).length;
  document.getElementById('stat-score').textContent = appState.lucidityScore;
  
  // Load badges
  const badgesGrid = document.getElementById('badges-grid');
  if (badgesGrid && appState.completedModules.length > 0) {
    const badges = [];
    
    if (appState.completedModules.length >= 3) {
      badges.push({ icon: '🌱', name: 'Explorateur' });
    }
    if (appState.completedModules.length >= 7) {
      badges.push({ icon: '🎓', name: 'Étudiant Assidu' });
    }
    if (appState.completedModules.length >= 15) {
      badges.push({ icon: '🏆', name: 'Maître de Lucidité' });
    }
    if (Object.keys(appState.testScores).length >= 1) {
      badges.push({ icon: '✅', name: 'Premier Test' });
    }
    
    if (badges.length > 0) {
      badgesGrid.innerHTML = badges.map(badge => `
        <div class="badge">
          <div class="badge-icon">${badge.icon}</div>
          <div class="badge-name">${badge.name}</div>
        </div>
      `).join('');
    } else {
      badgesGrid.innerHTML = '<p class="text-muted">Continue ton parcours pour débloquer des badges !</p>';
    }
  }
}