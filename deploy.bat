echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

::Build the project.
::if using a theme, replace with `hugo -t <YOURTHEME>`
bundle exec jekyll b
::Go To _site folder
cd _site

::Add changes to git.
git add .
::Commit changes.
for /f %%x in ('wmic path win32_utctime get /format:list ^| findstr "="') do set %%x
set today=%Year%-%Month%-%Day%
git commit -m "rebuilding site %today%"

::Push source and build repos.
git push origin master

::Come Back up to the Project Root
cd ..