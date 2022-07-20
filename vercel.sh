if [[ $VERCEL_GIT_COMMIT_REF == "master"  ]] ; then 
  echo "This is our master branch"
  npm run build:prod
else 
  echo "This is not our main branch"
  npm run build:dev
fi