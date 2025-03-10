$(function() {
    const fileSystem = {
        'root': {
            type: 'directory',
            children: {
                'projets': {
                    type: 'directory',
                    children: {
                        'secure-http-server.txt': { type: 'file', content: 'Projet 1: Application web React\n\nDescription: Une application de gestion des tâches avec React et Firebase.\nTechnologies: React, Firebase, CSS Modules\nLien: https://github.com/votreprofil/projet1' },
                        'zodiac-slayer.txt': { type: 'file', content: 'Projet 2: API RESTful\n\nDescription: Une API complète pour un système de gestion de contenu.\nTechnologies: Node.js, Express, MongoDB\nLien: https://github.com/votreprofil/projet2' },
                        'convolutiv-neural-network': { type: 'file', content: 'Projet 3: Application Mobile\n\nDescription: Une application mobile de recommandation de restaurants.\nTechnologies: React Native, Redux, Google Maps API\nLien: https://github.com/votreprofil/projet3' },
                        'rse-web': { type: 'file', content: 'Projet 3: Application Mobile\n\nDescription: Une application mobile de recommandation de restaurants.\nTechnologies: React Native, Redux, Google Maps API\nLien: https://github.com/votreprofil/projet3' }
                    }
                },
                'competences': {
                    type: 'directory',
                    children: {
                        'frontend.txt': { type: 'file', content: 'Compétences Frontend:\n\n• HTML5, CSS3, SASS/SCSS\n• JavaScript (ES6+)\n• React, Vue.js\n• Redux, Context API\n• TypeScript\n• Jest, React Testing Library' },
                        'backend.txt': { type: 'file', content: 'Compétences Backend:\n\n• Node.js, Express\n• Python, Django\n• PHP, Laravel\n• SQL (MySQL, PostgreSQL)\n• NoSQL (MongoDB)\n• GraphQL\n• REST API' },
                        'autres.txt': { type: 'file', content: 'Autres Compétences:\n\n• Git, GitHub\n• Docker\n• CI/CD (Jenkins, GitHub Actions)\n• Méthodologies Agiles (Scrum)\n• AWS, Firebase\n• Linux\n• Conception UX/UI' }
                    }
                },
                'formation': {
                    type: 'directory',
                    children: {
                        'diplome1.txt': { type: 'file', content: 'Master en Informatique\nUniversité de Paris\n2018-2020\n\nSpécialisation en développement web et mobile.' },
                        'diplome2.txt': { type: 'file', content: 'Licence en Sciences Informatiques\nUniversité de Lyon\n2015-2018\n\nFondamentaux de la programmation et des systèmes d\'information.' },
                        'certifications.txt': { type: 'file', content: 'Certifications:\n\n• AWS Certified Developer - Associate\n• MongoDB Certified Developer\n• React - The Complete Guide (Udemy)\n• Advanced JavaScript Concepts (Udemy)' }
                    }
                },
                'contact.txt': { 
                    type: 'file', 
                    content: 'Email: votre@email.com\nLinkedin: linkedin.com/in/votreprofil\nGitHub: https://github.com/elias-utf8\nTéléphone: +33 6 12 34 56 78' 
                },
                'about.txt': { 
                    type: 'file', 
                    content: 'À propos de moi:\n\nJe suis un développeur passionné avec une expertise en technologies web. J\'aime créer des interfaces innovantes et résoudre des problèmes complexes.\n\nQuand je ne code pas, vous pouvez me trouver en train de randonner, de lire de la science-fiction ou d\'expérimenter avec de nouvelles technologies.' 
                }
            }
        }
    };


    let currentPath = ['root'];
    let currentDir = fileSystem.root;

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
        return 'portfolio@elias:' + displayPath + '$ ';
    }

    $('#terminal').terminal({
        ls: function() {
            const currentNode = getNodeFromPath(currentPath);
            if (!currentNode || currentNode.type !== 'directory') {
                this.error('Erreur système: impossible de lister le contenu');
                return;
            }

            const items = [];
            for (const name in currentNode.children) {
                const node = currentNode.children[name];
                if (node.type === 'directory') {
                    items.push(name + '/');
                } else {
                    items.push(name);
                }
            }
            
            this.echo(items.join('  '));
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
                    this.echo('Retour au répertoire parent');
                } else {
                    this.echo('Vous êtes déjà dans le répertoire racine');
                }
                return;
            }

            if (currentDir.children && currentDir.children[dir] && currentDir.children[dir].type === 'directory') {
                currentPath.push(dir);
                currentDir = currentDir.children[dir];
                this.set_prompt(formatPrompt(currentPath));
                this.echo('Vous êtes maintenant dans le répertoire: ' + dir);
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
                this.echo(currentDir.children[file].content);
            } else {
                this.error('cat: ' + file + ': Aucun fichier ou dossier de ce type');
            }
        },
        pwd: function() {
            const displayPath = '/' + currentPath.slice(1).join('/');
            this.echo(displayPath || '/');
        },
        whoami: function() {
            this.echo('Elias GAUTHIER - Etudiant en informatique et en cybersécurité');
        },
        date: function() {
            this.echo(new Date().toString());
        },
        neofetch: function() {
            const navigateur = getBrowserNameModern();
            this.echo("      /) ,                            /)   ,            portfolio@elias");
            this.echo("  _  //    _   _       _   _      _/_(/       _  __     ---------------");
            this.echo("_(/_(/__(_(_(_/_)_    (_/_(_(_(_(_(__/ )__(__(/_/ (_");
            this.echo("                     .-/                            ");
            this.echo("                    (_/                             ");
        },
        help: function() {
            this.echo('\nCommandes disponibles:\n' + 
                    '  ls                - Liste les fichiers et dossiers\n' +
                    '  cd [dossier]      - Change de dossier\n' +
                    '  cat [fichier]     - Affiche le contenu d\'un fichier\n' +
                    '  pwd               - Affiche le répertoire de travail actuel\n' +
                    '  whoami            - Qui suis-je?\n' +
                    '  date              - Affiche la date et l\'heure actuelles\n' +
                    '  clear             - Efface l\'écran\n' +
                    '  help              - Affiche cette aide\n');
        }
    }, {
        greetings: 'Bienvenue dans mon portfolio! \nTapez "help" pour voir les commandes disponibles.',
        prompt: 'portfolio@elias:~/$ ',
        height: '100%'
    });
    
    function typeGreeting() {
        var terminal = $('#terminal').terminal();
        var greeting = "Bienvenue sur mon portfolio terminal! Découvrez mes projets et compétences avec des commandes Unix...";
        var i = 0;
        var timer = setInterval(function() {
            if (i < greeting.length) {
                terminal.insert(greeting.charAt(i));
                i++;
            } else {
                clearInterval(timer);
                terminal.echo('\nTapez "help" pour voir les commandes disponibles.');
            }
        }, 50);
    }
});
function getBrowserNameModern() {
    if (navigator.userAgentData) {
        return navigator.userAgentData.brands.map(brand => brand.brand).join(", ");
}}


