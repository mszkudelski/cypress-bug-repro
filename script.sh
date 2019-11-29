echo "" > log.txt;
for i in {1..20};
do
  if yarn run cypress:run;
    then
      echo 'Success' >> log.txt;
    else
      echo 'Failed' >> log.txt;
  fi ;
done;
