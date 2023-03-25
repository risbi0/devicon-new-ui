type Version = 'plain' | 'line' | 'original' | 'plain-wordmark' | 'line-wordmark' | 'original-wordmark';

export type IconData = {
  title: string;
  name: string;
  tags: string[];
  css: Version[];
  svg: Version[];
};

type IconDataArray = IconData[];

export const icons: IconDataArray = [
  {
    title: '.NET Core',
    name: 'dotnetcore',
    tags: ['framework'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: '.NET Framework',
    name: 'dot-net',
    tags: ['framework'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'AArch64',
    name: 'aarch64',
    tags: ['architecture', 'programming', 'language', 'ARM'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'Adobe After Effects',
    name: 'aftereffects',
    tags: ['video', 'editor'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'Adobe Illustrator',
    name: 'illustrator',
    tags: ['editor', 'vector'],
    css: ['plain', 'line'],
    svg: ['plain', 'line']
  },
  {
    title: 'Adobe Photoshop',
    name: 'photoshop',
    tags: ['editor', 'graphic'],
    css: ['plain', 'line'],
    svg: ['plain', 'line']
  },
  {
    title: 'Adobe Premiere Pro',
    name: 'premierepro',
    tags: ['editor', 'video'],
    css: ['plain'],
    svg: ['plain', 'original']
  },
  {
    title: 'Adobe XD',
    name: 'xd',
    tags: ['design', 'editor', 'ui'],
    css: ['plain', 'line'],
    svg: ['plain', 'line']
  },
  {
    title: 'AdonisJS',
    name: 'adonisjs',
    tags: ['nodejs', 'framework'],
    css: ['original', 'original-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'Amazon Web Services',
    name: 'amazonwebservices',
    tags: ['cloud', 'hosting', 'server'],
    css: ['original', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain-wordmark']
  },
  {
    title: 'Anaconda',
    name: 'anaconda',
    tags: ['python', 'data-science'],
    css: ['original', 'original-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'Android',
    name: 'android',
    tags: ['os', 'mobile'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Android Studio',
    name: 'androidstudio',
    tags: ['application', 'editor', 'ide', 'android', 'mobile'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'AngularJS',
    name: 'angularjs',
    tags: ['framework', 'javascript'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Ansible',
    name: 'ansible',
    tags: ['automation', 'provisioning', 'deployment', 'continuous-delivery'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Apache',
    name: 'apache',
    tags: ['php'],
    css: ['plain', 'plain-wordmark', 'line', 'line-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark', 'line', 'line-wordmark']
  },
  {
    title: 'Apache CouchDB',
    name: 'couchdb',
    tags: ['database'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Apache Kafka',
    name: 'apachekafka',
    tags: ['streaming', 'open-source'],
    css: ['original', 'original-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'Apache Subversion',
    name: 'subversion',
    tags: ['svn', 'version'],
    css: ['original'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'Apache Tomcat',
    name: 'tomcat',
    tags: ['server'],
    css: ['line', 'line-wordmark'],
    svg: ['original', 'original-wordmark', 'line', 'line-wordmark']
  },
  {
    title: 'Appcelerator',
    name: 'appcelerator',
    tags: ['app', 'mobile'],
    css: ['original', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain-wordmark']
  },
  {
    title: 'Apple',
    name: 'apple',
    tags: ['brand', 'mobile'],
    css: ['original'],
    svg: ['original']
  },
  {
    title: 'Appwrite',
    name: 'appwrite',
    tags: ['cloud', 'platform', 'server'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Arduino',
    name: 'arduino',
    tags: ['microcontroller', 'hardware'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Argo CD',
    name: 'argocd',
    tags: ['gitops', 'continuous-delivery'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Atom',
    name: 'atom',
    tags: ['editor'],
    css: ['original', 'original-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'Babel',
    name: 'babel',
    tags: ['javascript', 'transpiler'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'Backbone.js',
    name: 'backbonejs',
    tags: ['javascript', 'framework'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Bamboo',
    name: 'bamboo',
    tags: ['platform', 'integration', 'server'],
    css: ['original', 'original-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'Bash',
    name: 'bash',
    tags: ['shell', 'command'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'Behance',
    name: 'behance',
    tags: ['social', 'website'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Bitbucket',
    name: 'bitbucket',
    tags: ['version-control'],
    css: ['original', 'original-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'Blender',
    name: 'blender',
    tags: ['modelling', 'python', '3d', 'animation'],
    css: ['original', 'original-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'Bootstrap',
    name: 'bootstrap',
    tags: ['css', 'framework'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Bower',
    name: 'bower',
    tags: ['package', 'manager'],
    css: ['plain', 'plain-wordmark', 'line', 'line-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark', 'line', 'line-wordmark']
  },
  {
    title: 'Bulma',
    name: 'bulma',
    tags: ['css', 'framework'],
    css: ['plain'],
    svg: ['plain']
  },
  {
    title: 'C',
    name: 'c',
    tags: ['language'],
    css: ['plain', 'plain-wordmark', 'line', 'line-wordmark'],
    svg: ['original', 'plain', 'line']
  },
  {
    title: 'C#',
    name: 'csharp',
    tags: ['language'],
    css: ['plain', 'plain-wordmark', 'line', 'line-wordmark'],
    svg: ['original', 'plain', 'line']
  },
  {
    title: 'C++',
    name: 'cplusplus',
    tags: ['language'],
    css: ['plain', 'plain-wordmark', 'line', 'line-wordmark'],
    svg: ['original', 'plain', 'line']
  },
  {
    title: 'CakePHP',
    name: 'cakephp',
    tags: ['framework'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Canva',
    name: 'canva',
    tags: ['design'],
    css: ['original'],
    svg: ['original']
  },
  {
    title: 'CentOS',
    name: 'centos',
    tags: ['server', 'linux'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Ceylon',
    name: 'ceylon',
    tags: ['language'],
    css: ['plain'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'CircleCI',
    name: 'circleci',
    tags: ['integration', 'platform'],
    css: ['plain', 'plain-wordmark'],
    svg: ['plain', 'plain-wordmark']
  },
  {
    title: 'Clojure',
    name: 'clojure',
    tags: ['language'],
    css: ['line', 'plain'],
    svg: ['original', 'line']
  },
  {
    title: 'ClojureScript',
    name: 'clojurescript',
    tags: ['language'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'CMake',
    name: 'cmake',
    tags: ['build'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Codecov',
    name: 'codecov',
    tags: ['platform', 'integration'],
    css: ['plain'],
    svg: ['plain']
  },
  {
    title: 'CodeIgniter',
    name: 'codeigniter',
    tags: ['php', 'framework'],
    css: ['plain', 'plain-wordmark'],
    svg: ['plain', 'plain-wordmark']
  },
  {
    title: 'CodePen',
    name: 'codepen',
    tags: ['social', 'website', 'editor'],
    css: ['plain', 'plain-wordmark'],
    svg: ['plain', 'original-wordmark']
  },
  {
    title: 'CoffeeScript',
    name: 'coffeescript',
    tags: ['javascript', 'language'],
    css: ['original', 'original-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'Composer',
    name: 'composer',
    tags: ['package', 'manager', 'php'],
    css: ['line', 'line-wordmark'],
    svg: ['original', 'line', 'line-wordmark']
  },
  {
    title: 'Confluence',
    name: 'confluence',
    tags: ['collaboration', 'documentation', 'wiki'],
    css: ['original', 'original-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'Crystal',
    name: 'crystal',
    tags: ['programming', 'language'],
    css: ['original', 'original-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'CSS',
    name: 'css3',
    tags: ['language', 'programming'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Cucumber',
    name: 'cucumber',
    tags: ['framework'],
    css: ['plain', 'plain-wordmark'],
    svg: ['plain', 'plain-wordmark']
  },
  {
    title: 'D3.js',
    name: 'd3js',
    tags: [],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'Dart',
    name: 'dart',
    tags: ['programming', 'language'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Debian',
    name: 'debian',
    tags: ['os', 'server'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Deno',
    name: 'denojs',
    tags: ['javascript', 'rust', 'language'],
    css: ['original', 'original-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'Devicon',
    name: 'devicon',
    tags: ['iconset'],
    css: ['plain', 'plain-wordmark', 'line', 'line-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark', 'line', 'line-wordmark']
  },
  {
    title: 'DigitalOcean',
    name: 'digitalocean',
    tags: ['cloud', 'hosting', 'database', 'storage'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'discord.js',
    name: 'discordjs',
    tags: ['wrapper', 'api_wrapper', 'nodejs'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Django',
    name: 'django',
    tags: [],
    css: ['plain', 'plain-wordmark'],
    svg: ['plain', 'plain-wordmark']
  },
  {
    title: 'Docker',
    name: 'docker',
    tags: ['platform', 'deploy'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Doctrine',
    name: 'doctrine',
    tags: [],
    css: ['plain', 'plain-wordmark', 'line', 'line-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark', 'line', 'line-wordmark']
  },
  {
    title: 'Dropwizard',
    name: 'dropwizard',
    tags: ['java', 'framework'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'Drupal',
    name: 'drupal',
    tags: ['cms'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Electron',
    name: 'electron',
    tags: ['framework'],
    css: ['original', 'original-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'Eleventy',
    name: 'eleventy',
    tags: ['ssg', 'static site generator'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'Elixir',
    name: 'elixir',
    tags: ['language'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Elm',
    name: 'elm',
    tags: ['framework'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Embedded C',
    name: 'embeddedc',
    tags: ['language', 'programming'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Ember.js',
    name: 'ember',
    tags: ['framework'],
    css: ['original-wordmark'],
    svg: ['original-wordmark']
  },
  {
    title: 'Erlang',
    name: 'erlang',
    tags: [],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'ESLint',
    name: 'eslint',
    tags: ['linter', 'javascript', 'code-quality', 'coding-style'],
    css: ['original', 'original-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'Express.js',
    name: 'express',
    tags: ['framework'],
    css: ['original', 'original-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'F#',
    name: 'fsharp',
    tags: ['language'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'Facebook',
    name: 'facebook',
    tags: ['auth'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'FastAPI',
    name: 'fastapi',
    tags: ['python', 'framework'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'FeathersJS',
    name: 'feathersjs',
    tags: ['framework', 'rest'],
    css: ['original'],
    svg: ['original']
  },
  {
    title: 'Fedora Linux',
    name: 'fedora',
    tags: ['linux', 'distribuition', 'desktop'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'Figma',
    name: 'figma',
    tags: ['design'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'FileZilla',
    name: 'filezilla',
    tags: ['ftp'],
    css: ['plain', 'plain-wordmark'],
    svg: ['plain', 'plain-wordmark']
  },
  {
    title: 'Firebase',
    name: 'firebase',
    tags: ['auth', 'hosting', 'storage', 'cloud'],
    css: ['plain', 'plain-wordmark'],
    svg: ['plain', 'plain-wordmark']
  },
  {
    title: 'Flask',
    name: 'flask',
    tags: ['python', 'framework'],
    css: ['original', 'original-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'Flutter',
    name: 'flutter',
    tags: ['framework', 'sdk'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'Foundation',
    name: 'foundation',
    tags: ['framework', 'css'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Framework',
    name: 'gatling',
    tags: ['framework', 'testing'],
    css: ['plain', 'plain-wordmark'],
    svg: ['plain', 'plain-wordmark']
  },
  {
    title: 'Gatsby',
    name: 'gatsby',
    tags: ['reactjs', 'framework'],
    css: ['plain', 'plain-wordmark'],
    svg: ['plain', 'original', 'original-wordmark', 'plain-wordmark']
  },
  {
    title: 'GCC',
    name: 'gcc',
    tags: ['compiler', 'linux'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'Gentoo Linux',
    name: 'gentoo',
    tags: ['linux', 'distribuition', 'desktop'],
    css: ['plain', 'plain-wordmark'],
    svg: ['plain', 'plain-wordmark']
  },
  {
    title: 'GIMP',
    name: 'gimp',
    tags: ['graphic'],
    css: ['plain'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Git',
    name: 'git',
    tags: ['version-control'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'GitHub',
    name: 'github',
    tags: ['version-control'],
    css: ['original', 'original-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'GitLab',
    name: 'gitlab',
    tags: ['version-control'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Gitter',
    name: 'gitter',
    tags: ['social', 'chat'],
    css: ['plain', 'plain-wordmark'],
    svg: ['plain', 'plain-wordmark']
  },
  {
    title: 'Go',
    name: 'go',
    tags: ['language'],
    css: ['original-wordmark', 'plain', 'line'],
    svg: ['original', 'original-wordmark', 'plain', 'line']
  },
  {
    title: 'Godot',
    name: 'godot',
    tags: ['game-engine', 'open-source'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Google',
    name: 'google',
    tags: ['auth'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Google Chrome',
    name: 'chrome',
    tags: ['browser'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Google Cloud',
    name: 'googlecloud',
    tags: ['google', 'cloud'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Gradle',
    name: 'gradle',
    tags: ['task-runner'],
    css: ['plain', 'plain-wordmark'],
    svg: ['plain', 'plain-wordmark']
  },
  {
    title: 'Grafana',
    name: 'grafana',
    tags: ['monitoring', 'analytics', 'metrics', 'logs', 'visualization', 'web-application'],
    css: ['original', 'original-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'Grails',
    name: 'grails',
    tags: ['framework'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'GraphQL',
    name: 'graphql',
    tags: ['language', 'data', 'query'],
    css: ['plain', 'plain-wordmark'],
    svg: ['plain', 'plain-wordmark']
  },
  {
    title: 'Groovy',
    name: 'groovy',
    tags: ['programming', 'language'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'Grunt',
    name: 'grunt',
    tags: ['task-runner', 'nodejs'],
    css: ['plain', 'plain-wordmark', 'line', 'line-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark', 'line', 'line-wordmark']
  },
  {
    title: 'Gulp',
    name: 'gulp',
    tags: ['task-runner', 'nodejs'],
    css: ['plain'],
    svg: ['plain']
  },
  {
    title: 'Handlebars',
    name: 'handlebars',
    tags: ['framework'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'Haskell',
    name: 'haskell',
    tags: ['language', 'functional'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Haxe',
    name: 'haxe',
    tags: ['language'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'Heroku',
    name: 'heroku',
    tags: ['cloud'],
    css: ['original', 'original-wordmark', 'plain', 'plain-wordmark', 'line', 'line-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'HTML',
    name: 'html5',
    tags: ['programming', 'language'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Hugo',
    name: 'hugo',
    tags: ['framework', 'ssg', 'static-site-generator', 'go', 'html', 'css'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'IFTTT',
    name: 'ifttt',
    tags: ['automation', 'applets', 'programming'],
    css: ['original'],
    svg: ['original']
  },
  {
    title: 'Inkscape',
    name: 'inkscape',
    tags: ['editor', 'vector'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'IntelliJ IDEA',
    name: 'intellij',
    tags: ['editor'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Internet Explorer',
    name: 'ie10',
    tags: ['browser'],
    css: ['original'],
    svg: ['original']
  },
  {
    title: 'Ionic',
    name: 'ionic',
    tags: ['framework'],
    css: ['original', 'original-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'Jamstack',
    name: 'jamstack',
    tags: ['javascript', 'markup'],
    css: ['original', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain-wordmark']
  },
  {
    title: 'Jasmine',
    name: 'jasmine',
    tags: ['testing'],
    css: ['plain', 'plain-wordmark'],
    svg: ['plain', 'plain-wordmark']
  },
  {
    title: 'Java',
    name: 'java',
    tags: ['programming', 'language'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Javascript',
    name: 'javascript',
    tags: ['programming', 'language'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'Jeet',
    name: 'jeet',
    tags: ['framework', 'css'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Jenkins',
    name: 'jenkins',
    tags: ['platform', 'integration', 'server'],
    css: ['line', 'plain'],
    svg: ['line', 'original', 'plain']
  },
  {
    title: 'Jest',
    name: 'jest',
    tags: ['testing', 'javascript'],
    css: ['plain'],
    svg: ['plain']
  },
  {
    title: 'JetBrains',
    name: 'jetbrains',
    tags: ['ide'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'Jira',
    name: 'jira',
    tags: ['platform', 'organize'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'jQuery',
    name: 'jquery',
    tags: ['library', 'javascript'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Julia',
    name: 'julia',
    tags: ['programming', 'language'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'K3s',
    name: 'k3s',
    tags: ['kubernetes', 'container', 'platform'],
    css: ['original', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain-wordmark']
  },
  {
    title: 'Kaggle',
    name: 'kaggle',
    tags: ['platform', 'auth', 'machine-learning'],
    css: ['original', 'original-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'Karma',
    name: 'karma',
    tags: ['testing', 'test-runner'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'KnockoutJS',
    name: 'knockout',
    tags: ['framework', 'javascript'],
    css: ['plain-wordmark'],
    svg: ['plain-wordmark']
  },
  {
    title: 'Kotlin',
    name: 'kotlin',
    tags: ['language'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'KrakenJS',
    name: 'krakenjs',
    tags: ['nodejs', 'framework'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Kubernetes',
    name: 'kubernetes',
    tags: ['container', 'deployment'],
    css: ['plain', 'plain-wordmark'],
    svg: ['plain', 'plain-wordmark']
  },
  {
    title: 'LabVIEW',
    name: 'labview',
    tags: ['language'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Laravel',
    name: 'laravel',
    tags: ['php', 'framework'],
    css: ['plain', 'plain-wordmark'],
    svg: ['plain', 'plain-wordmark']
  },
  {
    title: 'LaTeX',
    name: 'latex',
    tags: ['latex3', 'latex2e', 'markup', 'tex', 'typesetting-system'],
    css: ['original'],
    svg: ['original']
  },
  {
    title: 'Less',
    name: 'less',
    tags: ['css', 'pre-processor'],
    css: ['plain-wordmark'],
    svg: ['plain-wordmark']
  },
  {
    title: 'LinkedIn',
    name: 'linkedin',
    tags: ['social', 'auth'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Linux',
    name: 'linux',
    tags: ['os'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'Lua',
    name: 'lua',
    tags: [
      'programming',
      'language',
      'object-oriented',
      'scripting',
      'procedural',
      'prototype-based',
      'functional'
    ],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Magneto',
    name: 'magento',
    tags: ['php', 'framework'],
    css: ['original', 'original-wordmark', 'line'],
    svg: ['original', 'original-wordmark', 'line']
  },
  {
    title: 'Markdown',
    name: 'markdown',
    tags: ['markup', 'language'],
    css: ['original'],
    svg: ['original']
  },
  {
    title: 'Material UI',
    name: 'materialui',
    tags: ['framework', 'design', 'ui'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'MATLAB',
    name: 'matlab',
    tags: ['programming', 'language'],
    css: ['plain', 'line'],
    svg: ['original', 'plain', 'line']
  },
  {
    title: 'Maya',
    name: 'maya',
    tags: ['mel', 'pymel', 'python', '3d', 'programming', 'vfx', 'graphic', 'graphics', 'game', 'animation'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'MeteorJS',
    name: 'meteor',
    tags: ['javascript'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Microsoft Azure',
    name: 'azure',
    tags: ['cloud', 'devops'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Microsoft SQL Server',
    name: 'microsoftsqlserver',
    tags: ['database'],
    css: ['plain', 'plain-wordmark'],
    svg: ['plain', 'plain-wordmark']
  },
  {
    title: 'Minitab',
    name: 'minitab',
    tags: ['package', 'statistics'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'Mocha',
    name: 'mocha',
    tags: ['testing'],
    css: ['plain'],
    svg: ['plain']
  },
  {
    title: 'MODX',
    name: 'modx',
    tags: ['cms', 'php', 'framework'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'MongoDB',
    name: 'mongodb',
    tags: ['database'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Moodle',
    name: 'moodle',
    tags: ['platform'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Mozilla Firefox',
    name: 'firefox',
    tags: ['browser'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'MS-DOS',
    name: 'msdos',
    tags: ['os'],
    css: ['line'],
    svg: ['original', 'plain', 'line']
  },
  {
    title: 'MySQL',
    name: 'mysql',
    tags: ['database', 'language'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Neo4j',
    name: 'neo4j',
    tags: ['database'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'NestJS',
    name: 'nestjs',
    tags: ['framework'],
    css: ['plain', 'plain-wordmark'],
    svg: ['plain', 'plain-wordmark']
  },
  {
    title: 'Networkx',
    name: 'networkx',
    tags: ['graph', 'library', 'python'],
    css: ['original'],
    svg: ['original']
  },
  {
    title: 'Next.js',
    name: 'nextjs',
    tags: ['framework'],
    css: ['original', 'plain', 'line', 'original-wordmark', 'plain-wordmark'],
    svg: ['original', 'line', 'original-wordmark']
  },
  {
    title: 'NGINX',
    name: 'nginx',
    tags: ['server'],
    css: ['original', 'original-wordmark', 'plain', 'plain-wordmark'],
    svg: ['original']
  },
  {
    title: 'NixOS',
    name: 'nixos',
    tags: ['os'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Node.js',
    name: 'nodejs',
    tags: ['javascript', 'language'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'npm',
    name: 'npm',
    tags: ['package', 'manager'],
    css: ['original-wordmark'],
    svg: ['original-wordmark']
  },
  {
    title: 'NuGet',
    name: 'nuget',
    tags: ['package', 'manager'],
    css: ['original', 'original-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'NumPy',
    name: 'numpy',
    tags: ['library', 'python'],
    css: ['original', 'original-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'Nuxt.js',
    name: 'nuxtjs',
    tags: ['js', 'javascript', 'framework', 'frontend', 'vuejs'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'NW.js',
    name: 'nodewebkit',
    tags: [],
    css: ['plain', 'plain-wordmark', 'line', 'line-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark', 'line', 'line-wordmark']
  },
  {
    title: 'Objective-C',
    name: 'objectivec',
    tags: ['programming', 'language'],
    css: ['plain'],
    svg: ['plain']
  },
  {
    title: 'OCaml',
    name: 'ocaml',
    tags: ['programming', 'language'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'OpenAL',
    name: 'openal',
    tags: ['library', 'audio', 'game', '3d'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'OpenCV',
    name: 'opencv',
    tags: ['library', 'c/c++', 'computer-vision'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'OpenGL',
    name: 'opengl',
    tags: ['library', 'graphics', 'game', '3d'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'openSUSE',
    name: 'opensuse',
    tags: ['linux', 'distribuition', 'desktop'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Opera',
    name: 'opera',
    tags: ['browser'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Oracle',
    name: 'oracle',
    tags: ['database'],
    css: ['original'],
    svg: ['original']
  },
  {
    title: 'Packer',
    name: 'packer',
    tags: ['infrastructure', 'infrastructure-as-code', 'continuous-delivery'],
    css: ['original', 'original-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'pandas',
    name: 'pandas',
    tags: ['library', 'python'],
    css: ['original', 'original-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'Perl',
    name: 'perl',
    tags: ['programming', 'language'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'Phalcon',
    name: 'phalcon',
    tags: ['php', 'framework'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'Phoenix',
    name: 'phoenix',
    tags: ['framework'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'PHP',
    name: 'php',
    tags: ['programming', 'language'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'PhpStorm',
    name: 'phpstorm',
    tags: ['editor'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Podman',
    name: 'podman',
    tags: ['container', 'pods', 'docker'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Polygon',
    name: 'polygon',
    tags: ['ethereum', 'erc20', 'blockchain'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'PostgreSQL',
    name: 'postgresql',
    tags: ['database'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Processing',
    name: 'processing',
    tags: ['java', 'python', 'android', 'application', 'ide', 'framework'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Project Jupyter',
    name: 'jupyter',
    tags: ['programming', 'language'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Prometheus',
    name: 'prometheus',
    tags: ['monitoring', 'observability', 'analysis'],
    css: ['original', 'original-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'Protractor',
    name: 'protractor',
    tags: ['framework', 'javascript'],
    css: ['plain', 'plain-wordmark'],
    svg: ['plain', 'plain-wordmark']
  },
  {
    title: 'PuTTY',
    name: 'putty',
    tags: ['ssh', 'server'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'PyCharm',
    name: 'pycharm',
    tags: ['editor'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Pytest',
    name: 'pytest',
    tags: ['python', 'framework', 'testing'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Python',
    name: 'python',
    tags: ['programming', 'language'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'PyTorch',
    name: 'pytorch',
    tags: ['programming', 'framework', 'machine-learning', 'python'],
    css: ['original', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain-wordmark']
  },
  {
    title: 'Qt',
    name: 'qt',
    tags: ['framework'],
    css: ['original'],
    svg: ['original']
  },
  {
    title: 'R',
    name: 'r',
    tags: ['programming', 'language'],
    css: ['original', 'plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'Raspberry Pi',
    name: 'raspberrypi',
    tags: ['arm', 'computer'],
    css: ['line', 'line-wordmark'],
    svg: ['original', 'original-wordmark', 'line', 'line-wordmark']
  },
  {
    title: 'React',
    name: 'react',
    tags: ['framework'],
    css: ['original', 'original-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'Rect',
    name: 'rect',
    tags: ['programming', 'language'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'Red Hat',
    name: 'redhat',
    tags: ['server', 'linux'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Redis',
    name: 'redis',
    tags: ['server'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Redux',
    name: 'redux',
    tags: ['framework'],
    css: ['original'],
    svg: ['original']
  },
  {
    title: 'RocksDB',
    name: 'rocksdb',
    tags: ['database'],
    css: ['plain'],
    svg: ['plain']
  },
  {
    title: 'RSpec',
    name: 'rspec',
    tags: ['ruby', 'framework', 'testing'],
    css: ['original', 'original-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'RStudio',
    name: 'rstudio',
    tags: ['editor', 'package', 'statistics'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'Ruby',
    name: 'ruby',
    tags: ['programming', 'language'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Ruby on Rails',
    name: 'rails',
    tags: ['framework'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'RubyMine',
    name: 'rubymine',
    tags: ['editor'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Rust',
    name: 'rust',
    tags: ['programming', 'language'],
    css: ['plain'],
    svg: ['plain']
  },
  {
    title: 'Safari',
    name: 'safari',
    tags: ['browser'],
    css: ['plain', 'plain-wordmark', 'line-wordmark', 'line'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark', 'line-wordmark', 'line']
  },
  {
    title: 'Salesforce',
    name: 'salesforce',
    tags: ['platform', 'ecommerce'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'Sass',
    name: 'sass',
    tags: ['pre-processor', 'css'],
    css: ['original'],
    svg: ['original']
  },
  {
    title: 'Scala',
    name: 'scala',
    tags: ['programming', 'language'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Secure Shell',
    name: 'ssh',
    tags: ['security'],
    css: ['original', 'original-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'Selenium',
    name: 'selenium',
    tags: ['webdrive', 'automation'],
    css: ['original'],
    svg: ['original']
  },
  {
    title: 'Sequelize',
    name: 'sequelize',
    tags: ['database', 'language'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Shopware',
    name: 'shopware',
    tags: ['cloud', 'platform'],
    css: ['original', 'original-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'ShotGrid',
    name: 'shotgrid',
    tags: [
      'web-application',
      'autodesk',
      'project-management',
      'pipeline',
      'production-tool',
      'production-tracking'
    ],
    css: ['plain', 'original-wordmark'],
    svg: ['original', 'original-wordmark', 'plain']
  },
  {
    title: 'SDL',
    name: 'sdl',
    tags: ['library', 'cross-platform', 'multimedia', 'game'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'Sketch',
    name: 'sketch',
    tags: ['application'],
    css: ['line', 'line-wordmark'],
    svg: ['original', 'original-wordmark', 'line', 'line-wordmark']
  },
  {
    title: 'Slack',
    name: 'slack',
    tags: ['chat'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Socket.IO',
    name: 'socketio',
    tags: ['library', 'networking', 'websockets'],
    css: ['original', 'original-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'Solidity',
    name: 'solidity',
    tags: ['programming', 'language', 'blockchain'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'Sourcetree',
    name: 'sourcetree',
    tags: ['version-control'],
    css: ['original', 'original-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'Spring Framework',
    name: 'spring',
    tags: ['framework'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'SPSS',
    name: 'spss',
    tags: ['package', 'statistics'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'SQLAlchemy',
    name: 'sqlalchemy',
    tags: ['python', 'orm'],
    css: ['plain', 'original-wordmark'],
    svg: ['original', 'original-wordmark', 'plain']
  },
  {
    title: 'SQLite',
    name: 'sqlite',
    tags: ['sql', 'database', 'db'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Storybook',
    name: 'storybook',
    tags: ['framework', 'documentation', 'ui'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Stylus',
    name: 'stylus',
    tags: ['css', 'pre-processor'],
    css: ['original'],
    svg: ['original']
  },
  {
    title: 'Svelte',
    name: 'svelte',
    tags: ['javascript', 'framework'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Swift',
    name: 'swift',
    tags: ['language'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Symfony',
    name: 'symfony',
    tags: ['framework'],
    css: ['original', 'original-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'Tailwind CSS',
    name: 'tailwindcss',
    tags: ['css', 'framework'],
    css: ['plain', 'original-wordmark'],
    svg: ['plain', 'original-wordmark']
  },
  {
    title: 'Tensorflow',
    name: 'tensorflow',
    tags: ['library', 'machine-learning', 'deep-learning'],
    css: ['original', 'original-wordmark', 'line', 'line-wordmark'],
    svg: ['original', 'original-wordmark', 'line', 'line-wordmark']
  },
  {
    title: 'Terraform',
    name: 'terraform',
    tags: ['deployment', 'architecture', 'automation'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'The Algorithms',
    name: 'thealgorithms',
    tags: ['organization', 'algorithms'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Three.js',
    name: 'threejs',
    tags: ['javascript', 'framework'],
    css: ['original', 'original-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'TortoiseGit',
    name: 'tortoisegit',
    tags: ['git'],
    css: ['plain', 'line'],
    svg: ['original', 'plain', 'line']
  },
  {
    title: 'Tower',
    name: 'towergit',
    tags: ['git'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Travis CI',
    name: 'travis',
    tags: ['platform', 'integration'],
    css: ['plain', 'plain-wordmark'],
    svg: ['plain', 'plain-wordmark']
  },
  {
    title: 'Trello',
    name: 'trello',
    tags: ['platform', 'organize'],
    css: ['plain', 'plain-wordmark'],
    svg: ['plain', 'plain-wordmark']
  },
  {
    title: 'Twitter',
    name: 'twitter',
    tags: ['auth'],
    css: ['original'],
    svg: ['original']
  },
  {
    title: 'TYPO3',
    name: 'typo3',
    tags: ['cms', 'php'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Typscript',
    name: 'typescript',
    tags: ['programming', 'transpiler'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'Ubuntu',
    name: 'ubuntu',
    tags: ['os'],
    css: ['plain', 'plain-wordmark'],
    svg: ['plain', 'plain-wordmark']
  },
  {
    title: 'Unity',
    name: 'unity',
    tags: ['csharp', 'engine', 'game'],
    css: ['original', 'original-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'UNIX',
    name: 'unix',
    tags: ['os'],
    css: ['original'],
    svg: ['original']
  },
  {
    title: 'Unreal Engine',
    name: 'unrealengine',
    tags: ['c++', 'engine', 'game'],
    css: ['original', 'original-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'uWSGI',
    name: 'uwsgi',
    tags: ['hosting'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'Vagrant',
    name: 'vagrant',
    tags: ['platform'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Vim',
    name: 'vim',
    tags: ['editor'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'Visual Studio',
    name: 'visualstudio',
    tags: ['editor'],
    css: ['plain', 'plain-wordmark'],
    svg: ['plain', 'plain-wordmark']
  },
  {
    title: 'Visual Studio Code',
    name: 'vscode',
    tags: ['editor', 'ide'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Vue Storefront',
    name: 'vuestorefront',
    tags: ['framework'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'Vue.js',
    name: 'vuejs',
    tags: ['framework'],
    css: ['plain', 'plain-wordmark', 'line', 'line-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark', 'line', 'line-wordmark']
  },
  {
    title: 'Vuetify',
    name: 'vuetify',
    tags: ['css', 'framework', 'vuejs-library', 'material-design'],
    css: ['line', 'plain'],
    svg: ['original', 'plain', 'line']
  },
  {
    title: 'Webflow',
    name: 'webflow',
    tags: ['cms', 'ecommerce'],
    css: ['original'],
    svg: ['original']
  },
  {
    title: 'Weblate',
    name: 'weblate',
    tags: ['localization'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'plain', 'original-wordmark', 'plain-wordmark']
  },
  {
    title: 'Webpack',
    name: 'webpack',
    tags: ['package', 'manager'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'WebStorm',
    name: 'webstorm',
    tags: ['editor'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'Windows 8',
    name: 'windows8',
    tags: ['os'],
    css: ['original', 'original-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'WooCommerce',
    name: 'woocommerce',
    tags: ['ecommerce'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'plain', 'original-wordmark', 'plain-wordmark']
  },
  {
    title: 'WordPress',
    name: 'wordpress',
    tags: ['cms'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'plain', 'plain-wordmark']
  },
  {
    title: 'Xamarin',
    name: 'xamarin',
    tags: ['application', 'programming', 'editor', 'ide', 'ios', 'mobile', 'apple', 'android', 'windows'],
    css: ['original', 'original-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'XCode',
    name: 'xcode',
    tags: ['application', 'editor', 'ide', 'ios', 'iphone', 'mobile', 'apple'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'Yarn',
    name: 'yarn',
    tags: ['package', 'manager'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark']
  },
  {
    title: 'Yii',
    name: 'yii',
    tags: ['php', 'framework'],
    css: ['plain', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain', 'plain-wordmark']
  },
  {
    title: 'YunoHost',
    name: 'yunohost',
    tags: ['os'],
    css: ['plain'],
    svg: ['original', 'plain']
  },
  {
    title: 'Zend',
    name: 'zend',
    tags: ['php', 'framework'],
    css: ['plain', 'plain-wordmark'],
    svg: ['plain', 'plain-wordmark']
  },
  {
    title: 'Zig',
    name: 'zig',
    tags: ['language'],
    css: ['original', 'plain-wordmark'],
    svg: ['original', 'original-wordmark', 'plain-wordmark']
  }
];
