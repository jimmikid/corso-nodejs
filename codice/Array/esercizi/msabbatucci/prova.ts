try {
      console.log("Ciao, sono nel blocco try....")
      JSON.parse(`abcd=1234`)
}catch (error){
   console.log(`Ho generato il seguente errore: ${error}`)
} finally {
    console.log(`Sono il blocco finally`)
}

console.log("\n\n\n===============\n\n\n")

console.log(`Number.MAX_SAFE_INTEGER: ${Number.MAX_SAFE_INTEGER}`);