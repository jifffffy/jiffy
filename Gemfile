# frozen_string_literal: true

source "https://rubygems.org"

git_source(:github) {|repo_name| "https://github.com/#{repo_name}" }

# gem "github-pages", group: :jekyll_plugins
gem 'wdm', '>= 0.1.0' if Gem.win_platform?

gem 'jekyll', '~> 3.8.6'
gem 'coderay', '~> 1.1.0'
gem 'rake-jekyll', '~> 1.1.0'

group :jekyll_plugins do
  gem 'jekyll-plantuml', '~> 1.1'
  gem 'asciidoctor-diagram', '~> 1.5.18'
  gem 'jekyll-asciidoc', '~> 2.1.1'
  gem 'jekyll-feed'
  gem 'jekyll-sitemap'
  gem 'jekyll-seo-tag'
  gem 'jekyll-paginate'
end
