 $ (function() {
    const fileSystem = {
        'root': {
            type: 'directory',
            children: {
                'projets': {
                    type: 'directory',
                    children: {
                        'poleinfo-api': { type: 'file', content: 'API REST écrite en Python avec FastAPI\n\n\n\nProjet de fin de cycle BTS qui consistais à concevoir un système d\'information permettant la réservations de salles de classes dans un établissement scolaire.\nPython, FastAPI, MariaDB, JSON\nLien de mon rapport de projet: https://eliasgauthier.fr/r/GAUTHIER/rap.pdf'},
                        'secure-http-server.txt': { type: 'file', content: 'Serveur HTTP avec chiffrement asymétrique\n\nDescription: Implémentation du chiffrement RSA en partant de zéro dans un serveur HTTP\nPython, GUI, Protocole HTTP, RSA\nLien: https://github.com/elias-utf8/secure-http-server/tree/main\n\nCe projet était mon projet de fin de cycle en Terminale (2023) et consiste à implémenter le chiffrement asymétrique RSA depuis zéro dans un serveur HTTP.' },
                        'cnn.txt': { type: 'file', content: 'Réseau de neurones convolutifs (CNN)\n\nDescription: Développement de réseaux de neurones avec interface graphique\nPython, TensorFlow, Keras\nLien: https://github.com/elias-utf8/convolutional-neural-network\n\nProjet personnel (2025) axé sur le développement et l\'entraînement de modèles de réseaux neuronaux convolutifs.' },
                        'web-scraper.txt': { type: 'file', content: 'Web Scraper - CLI\n\nDescription: Application CLI C++ légère et performante pour l\'extraction de contenu web\nC++\nLien: https://github.com/elias-utf8/simple-web-scraper\n\nProjet personnel (2025) permettant l\'extraction du code HTML, l\'identification et l\'analyse automatique des liens avec une interface en ligne de commande simple et efficace.' },
                        'rse-web.txt': { type: 'file', content: 'Application de gestion pour entreprise\n\nDescription: Interface web de gestion de tâches avec différentes caractéristiques et catégories\nPHP, JavaScript, MySQL, CSS\n\nProjet professionnel (2025) intégrant la manipulation de bases de données, gestion d\'utilisateurs, création dynamique de tâches et une messagerie simple.' },
                        'logs-analyzer.txt': { type: 'file', content: 'Analyseur de logs\n\nDescription: Application d\'analyse de logs écrite en COBOL, initialement développée pour un environnement mainframe Z/OS, le code source pour une compilation locale avec GNU Cobol ou IBM Cobol est disponible sur mon Github.\nTechnologies: COBOL, mainframe\nLien: https://github.com/elias-utf8/cobol-log-analyzer\n\nProjet personnel (2025) en développement.' }
                    }
                },
                'competences': {
                    type: 'directory',
                    children: {
                        'programmation.txt': { type: 'file', content: 'Compétences en programmation:\n\n• Python: Développement d\'applications backend (Flask, FastAPI), traitement des données (NumPy, pandas), automatisation de tâches (scripting), principes de base en IA/ML (TensorFlow, Keras).\n• C++: Conception de logiciels IHM (avec QtCreator), manipulation de trames (liaison série, modbus tcp, GPS), programmation orientée objet, GPIO, RFID.\n• COBOL: Environnement mainframe z/OS, écriture et lecture de datasets, execution de jobs JCL.\n• PHP: Développement de sites et interface web avec intégration de bases de données et préventions aux injections SQL.\n• JavaScript: Création d\'interfaces interactives en frontend et gestion d\'événements côté utilisateur.\n• Octave/Matlab: Calcul automatisé de primitives, loi exponentielle et transformée de Fourier discrète.\n• Bash: Notions de base.' },
                        'reseaux.txt': { type: 'file', content: 'Compétences en réseaux:\n\n• Infrastructure DNS\n• Routage et adressage IP\n• Découpage de sous-réseaux\n• Protocole IPv6\n• Serveurs: Installation de serveurs Apache sur Raspberry Pi (Usage de ProFTPD, VNC, SSH, FileZilla), Proxmox.' },
                        'outils.txt': { type: 'file', content: 'Outils maîtrisés:\n\n• QtCreator\n• Apache\n• MySQL\n• LaTeX\n• Proxmox\n• Git\n• Cisco Packet Tracer\n\nSystèmes d\'exploitation:\n• GNU/Linux (Debian, Arch Linux, Gentoo, CentOS)\n• MacOS\n• Windows\n\nAutres compétences:\n• IA\n• Cybersécurité de base\n• Reverse engineering\n• OSINT\n• Cryptanalyse' }
                    }
                },
                'formation': {
                    type: 'directory',
                    children: {
                        'but.txt': { type: 'file', content: 'Bachelor Universitaire de Technologie en 3ème année - Informatique \nIUT de Bordeaux\n2025-2026\n\nEn cours.' },
                        'bts.txt': { type: 'file', content: 'BTS CIEL (Cybersécurité, Informatique, ELectronique et réseaux)\nLycée Pilote Innovant International, Poitiers\n2023-2025\n\nAdmis avec 16.80 de moyenne générale.' },
                        'bac.txt': { type: 'file', content: 'Baccalauréat technologique STI2D SIN\nLycée Charles Augustin Coulomb\n2023\n\nMention Bien - 15,67/20' },
                        'certifications.txt': { type: 'file', content: 'Certifications:\n\n• COBOL Programming with VSCode (IBM)\n• AI Fundamentals (IBM)\n• English for IT (Cisco Networking Academy)\n• Python essentials 1 et 2 (Cisco Networking Academy)\n• Introduction to Cybersecurity (Cisco Networking Academy)\n• NDG Linux essentials (Cisco Networking Academy)\n• NDG Linux unhatched (Cisco Networking Academy)' }
                    }
                },
                'experiences': {
                    type: 'directory',
                    children: {
                        'schneider-electric.txt': { type: 'file', content: 'Stagiaire CIIRA (Cybersécurité Informatique Industrielle Robotique Automatisme)\nSchneider Electric, L\'isle d\'Espagnac, France\nMai 2024 - Juillet 2024\n\n• Écriture d\'un script Python d\'automatisation de relevé de données énergétiques depuis des automates d\'usine vers une interface DISS de supervision. Utilisation de Python, SQL, sFTP et manipulation de feuilles de calculs.\n• Mise en application du travail et du développement collaboratif avec déploiement en production.' },
                        'gauthier-charente-dev.txt': { type: 'file', content: 'Développeur logiciel (emploi saisonnier)\nGauthier Charente, Marthon, France\nJuillet 2024 - Août 2024\n\n• Développement d\'une application bureau pour calculer et visualiser les échéances de commandes des clients depuis une base de donnée. Écrit en VB .NET\n• Développement d\'une application de gestion RSE (Responsabilité Sociétale des Entreprises) permettant d\'inscrire multiples informations et médias dans différentes catégories. Écrit en VB .NET (Migration faite vers une interface web.)' },
                        'gauthier-charente-ouvrier.txt': { type: 'file', content: 'Ouvrier d\'usine (emploi saisonnier)\nGauthier Charente, Marthon, France\nJuillet 2022 - Août 2022, Juillet 2023 - Août 2023' },
                        'naval-group.txt': { type: 'file', content: 'Stage de découverte du monde de l\'entreprise\nNaval Group, Ruelle-sur-Touvre, France\n1 semaine - 2019' }
                    }
                },
                'accomplissements.txt': { 
                    type: 'file', 
                    content: 'Accomplissements:\n\n• 20e/591 - "Passe ton hack d\'abord", COMCYBER, France (2025)\n• 4315 points | 7e/2053 - Cyberlearning, Plateforme de CTF française (2024/2025)' 
                },
                'langues.txt': { 
                    type: 'file', 
                    content: 'Langues:\n\n• Français: Natif\n• Anglais: B2/C1\n• Allemand: A2' 
                },
                'contact.txt': { 
                    type: 'file', 
                    content: 'Email: gauthierelias@proton.me\nEmail académique: elias.gauthier@lp2i-poitiers.fr\nTéléphone: +33 652829777\nGitHub: https://github.com/elias-utf8\nPortfolio: https://eliasgauthier.fr/' 
                },
                'about.txt': { 
                    type: 'file', 
                    content: 'À propos de moi:\n\nJe suis étudiant en 3ème année en BUT Informatique Parcours A Réalisation d’applications : conception, développement, validation. Passionné par l\'Informatique depuis tout jeune, je développe constamment mes compétences à travers des projets personnels et professionnels.\n\nMes domaines d\'expertise incluent la programmation dans plusieurs langages (Python, C++, COBOL, PHP, JavaScript), les réseaux informatiques, et la cybersécurité.\n\nJe suis particulièrement intéressé par les challenges de cybersécurité, comme en témoignent mes résultats aux compétitions CTF (Capture The Flag), où j\'ai obtenu de bons classements.' 
                }
            }
        }
    };

    let currentPath = ['root'];
    let currentDir = fileSystem.root;
    let commandHistory = [];
    let historyIndex = -1;
    let lastCommand = '';
    let autoComplete = {
        active: false,
        commands: ['ls', 'cd', 'cat', 'pwd', 'whoami', 'date', 'neofetch', 'help', 'clear'],
        suggestions: [],
        index: 0
    };

    const colors = {
        prompt: '#5AF78E',      // prompt
        command: '#FFFFFF',     // commandes
        directory: '#57C7FF',   // répertoires
        file: '#F3F99D',        // fichiers
        error: '#FF5C57',       // erreurs
        title: '#FF6AC1',       // titres
        link: '#57C7FF',        // liens
        highlight: '#FF9F43',   // surbrillances
        secondary: '#9AEDFE',   // éléments secondaires
        success: '#5AF78E',     // succès
        info: '#BFBFBF'         // infos générales
    };

    function getNodeFromPath(path) {
        let current = fileSystem.root;
        
        const pathToTraverse = path[0] === 'root' ? path.slice(1) : path;
        
        for (const segment of pathToTraverse) {
            if (current.children && current.children[segment]) {
                current = current.children[segment];
            } else {
                return null;
            }
        }
        return current;
    }

    function formatPrompt(path) {
        const displayPath = path.length > 1 ? '~/' + path.slice(1).join('/') : '~/';
        return '[[;' + colors.prompt + ';]portfolio@elias]:[[;' + colors.secondary + ';]' + displayPath + ']   $   ';
    }

    function formatContent(content) {
        // Mise en forme des titres
        content = content.replace(/^([^\n•:]+):?$/gm, function(match, p1) {
            return '[[b;' + colors.title + ';]' + p1 + ']';
        });

        content = content.replace(/(\d{4}(-\d{4})?|\d{4}-\d{2}-\d{2}|[A-Za-z]+ \d{4}( - [A-Za-z]+ \d{4})?)/g, 
            '[[i;' + colors.secondary + ';]$1]');

        const techKeywords = ['Python', 'C\\+\\+', 'COBOL', 'PHP', 'JavaScript', 'MySQL', 'LaTeX', 'Git', 
            'Linux', 'Windows', 'MacOS', 'TensorFlow', 'Keras', 'Flask', 'FastAPI', 'QtCreator', 'Apache',
            'SQL', 'sFTP', 'VB .NET', 'IA', 'Cybersécurité', 'RSA', 'DNS', 'IPv6'];
        
        techKeywords.forEach(keyword => {
            const regex = new RegExp('(\\b' + keyword + '\\b)', 'g');
            content = content.replace(regex, '[[;' + colors.highlight + ';]$1]');
        });

        content = content.replace(/^(• .+)$/gm, '[[;' + colors.success + ';]$1]');

        content = content.replace(/(https?:\/\/[^\s]+)/g, '[[u;' + colors.link + ';]$1]');

        return content;
    }

    function getCompletions(input) {
        if (input.startsWith('cd ') || input.startsWith('cat ')) {
            const cmd = input.split(' ')[0];
            const partial = input.split(' ')[1] || '';
            const items = [];

            if (currentDir.children) {
                for (const name in currentDir.children) {
                    const node = currentDir.children[name];
                    if ((cmd === 'cd' && node.type === 'directory') || 
                        (cmd === 'cat' && node.type === 'file')) {
                        if (name.startsWith(partial)) {
                            items.push(name);
                        }
                    }
                }
            }
            return items;
        } else {
            return autoComplete.commands.filter(cmd => cmd.startsWith(input));
        }
    }

    $('#terminal').terminal({
        ls: function() {
            const currentNode = getNodeFromPath(currentPath);
            if (!currentNode || currentNode.type !== 'directory') {
                this.error('Erreur système: impossible de lister le contenu');
                return;
            }

            const dirs = [];
            const files = [];
            
            for (const name in currentNode.children) {
                const node = currentNode.children[name];
                if (node.type === 'directory') {
                    dirs.push('[[b;' + colors.directory + ';]' + name + '/]');
                } else {
                    files.push('[[;' + colors.file + ';]' + name + ']');
                }
            }
            
            if (dirs.length > 0) {
                this.echo(dirs.join('  '));
            }
            if (files.length > 0) {
                this.echo(files.join('  '));
            }
        },
        cd: function(dir) {
            if (!dir) {
                currentPath = ['root'];
                currentDir = fileSystem.root;
                this.set_prompt(formatPrompt(currentPath));
                return;
            }

            if (dir === '..') {
                if (currentPath.length > 1) {
                    currentPath.pop();
                    currentDir = getNodeFromPath(currentPath);
                    this.set_prompt(formatPrompt(currentPath));
                    this.echo('[[;' + colors.info + ';]Retour au répertoire parent]');
                } else {
                    this.echo('[[;' + colors.info + ';]Vous êtes déjà dans le répertoire racine]');
                }
                return;
            }

            if (currentDir.children && currentDir.children[dir] && currentDir.children[dir].type === 'directory') {
                currentPath.push(dir);
                currentDir = currentDir.children[dir];
                this.set_prompt(formatPrompt(currentPath));
                this.echo('[[;' + colors.success + ';]Vous êtes maintenant dans le répertoire: ' + dir + ']');
            } else {
                this.error('cd: ' + dir + ': Aucun fichier ou dossier de ce type');
            }
        },
        cat: function(file) {
            if (!file) {
                this.error('cat: argument manquant: spécifiez un fichier');
                return;
            }

            if (currentDir.children && currentDir.children[file] && currentDir.children[file].type === 'file') {
                const formattedContent = formatContent(currentDir.children[file].content);
                this.echo(formattedContent);
            } else {
                this.error('cat: ' + file + ': Aucun fichier ou dossier de ce type');
            }
        },
        pwd: function() {
            const displayPath = '/' + currentPath.slice(1).join('/');
            this.echo('[[;' + colors.info + ';]' + (displayPath || '/') + ']');
        },
        whoami: function() {
            this.echo('[[b;' + colors.title + ';]Elias GAUTHIER] - [[i;' + colors.secondary + ';]Étudiant en BTS CIEL (Cybersécurité, Informatique, ELectronique et réseaux)]');
        },
        date: function() {
            this.echo('[[;' + colors.info + ';]' + new Date().toString() + ']');
        },
        neofetch: function() {
            const navigateur = getBrowserNameModern();
            
            this.echo("      [[;#5AF78E;]/) ,                            /)   ,            ][[;#FF6AC1;]portfolio@elias]");
            this.echo("  [[;#5AF78E;]_  //    _   _       _   _      _/_(/       _  __     ][[;#9AEDFE;]---------------]");
            this.echo("[[;#5AF78E;]_(/_(/__(_(_(_/_)_    (_/_(_(_(_(_(__/ )__(__(/_/ (_    ][[;#F3F99D;]OS:] [[;#FFFFFF;]Portfolio Terminal]");
            this.echo("                     [[;#5AF78E;].-/                             ][[;#F3F99D;]Formation:] [[;#FFFFFF;]BTS CIEL]");
            this.echo("                    [[;#5AF78E;](_/                              ][[;#F3F99D;]Compétences:] [[;#FF9F43;]Python, C++, COBOL, Réseaux]");
            this.echo("                                                     [[;#F3F99D;]GitHub:] [[;#57C7FF;]elias-utf8]");
            this.echo("                                                     [[;#F3F99D;]Web:] [[;#57C7FF;]eliasgauthier.fr]");
            this.echo("                                                     [[;#F3F99D;]Navigateur:] [[;#FFFFFF;]" + (navigateur || "Détection impossible") + "]");
        },
        help: function() {
            this.echo('\n[[b;' + colors.title + ';]Commandes disponibles:]\n' + 
                    '  [[;' + colors.command + ';]ls]                - [[;' + colors.info + ';]Liste les fichiers et dossiers]\n' +
                    '  [[;' + colors.command + ';]cd [dossier]]      - [[;' + colors.info + ';]Change de dossier]\n' +
                    '  [[;' + colors.command + ';]cd ..]             - [[;' + colors.info + ';]Revient au dossier parent]\n' +
                    '  [[;' + colors.command + ';]cat [fichier]]     - [[;' + colors.info + ';]Affiche le contenu d\'un fichier]\n' +
                    '  [[;' + colors.command + ';]pwd]               - [[;' + colors.info + ';]Affiche le répertoire de travail actuel]\n' +
                    '  [[;' + colors.command + ';]whoami]            - [[;' + colors.info + ';]Qui suis-je?]\n' +
                    '  [[;' + colors.command + ';]date]              - [[;' + colors.info + ';]Affiche la date et l\'heure actuelles]\n' +
                    '  [[;' + colors.command + ';]neofetch]          - [[;' + colors.info + ';]Affiche les informations système]\n' +
                    '  [[;' + colors.command + ';]clear]             - [[;' + colors.info + ';]Efface l\'écran]\n' +
                    '  [[;' + colors.command + ';]help]              - [[;' + colors.info + ';]Affiche cette aide]\n\n' +
                    '[[;' + colors.secondary + ';]Astuce: Utilisez les flèches haut/bas pour l\'historique des commandes]');
        }
    }, {
        greetings: false,
        prompt: formatPrompt(currentPath),
        height: '100%',
        scrollOnEcho: true,
        outputLimit: 500,
        completion: function(command, callback) {
            callback(getCompletions(command));
        },
        keymap: {
            'CTRL+L': function(e, original) {
                this.clear();
                return false;
            }
        },
        onCommandNotFound: function(cmd) {
            this.error('Commande introuvable. Tapez "help" pour voir les commandes disponibles.');
        },
        onInit: function() {
            this.clear();
            typeGreeting(this);
            this.css('background-color', '#282A36');
            this.css('font-family', "'Source Code Pro', 'JetBrains Mono', monospace");
            this.css('font-size', '16px');
            this.css('line-height', '1.5');
            this.find('.terminal-output').css('padding', '10px');
            
            const terminal = this;
            
            this.on('keydown', function(e) {
                // Flèche haut - historique précédent
                if (e.which === 38) {
                    if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
                        historyIndex++;
                        terminal.set_command(commandHistory[historyIndex]);
                    }
                    return false;
                }
                // Flèche bas - historique suivant
                else if (e.which === 40) {
                    if (historyIndex > 0) {
                        historyIndex--;
                        terminal.set_command(commandHistory[historyIndex]);
                    } else if (historyIndex === 0) {
                        historyIndex = -1;
                        terminal.set_command('');
                    }
                    return false;
                }
                // Entrée - exécuter la commande et l'ajouter à l'historique
                else if (e.which === 13) {
                    const command = terminal.get_command().trim();
                    if (command && (commandHistory.length === 0 || commandHistory[0] !== command)) {
                        commandHistory.unshift(command);
                        if (commandHistory.length > 50) commandHistory.pop();
                    }
                    historyIndex = -1;
                }
            });
        }
    });
    
    function typeGreeting(terminal) {
        terminal.clear();
        const greeting = 'Bienvenue dans mon portfolio!';
        let i = 0;
        terminal.pause();
        
        const timer = setInterval(function() {
            if (i < greeting.length) {
                terminal.insert(greeting.charAt(i));
                i++;
            } else {
                clearInterval(timer);
                terminal.echo('\n[[;#BFBFBF;]Tapez "[[;#FFFFFF;]help]" pour voir les commandes disponibles.]');
                terminal.resume();
                
                $('.terminal-window').addClass('active-terminal');
                setTimeout(() => {
                    $('.terminal-window').removeClass('active-terminal');
                }, 800);
            }
        }, 30);
    }
});

function getBrowserNameModern() {
    if (navigator.userAgentData) {
        return navigator.userAgentData.brands.map(brand => brand.brand).join(", ");
    }
    
    const userAgent = navigator.userAgent;
    if (userAgent.indexOf("Firefox") > -1) return "Mozilla Firefox";
    if (userAgent.indexOf("Chrome") > -1) return "Google Chrome";
    if (userAgent.indexOf("Safari") > -1) return "Apple Safari";
    if (userAgent.indexOf("Edge") > -1) return "Microsoft Edge";
    if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) return "Internet Explorer";
    return "Navigateur inconnu";
}
