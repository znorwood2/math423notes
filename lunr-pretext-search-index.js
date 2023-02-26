var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "   example.org   https:\/\/example.org   copyright  "
},
{
  "id": "section-arithmetic",
  "level": "1",
  "url": "section-arithmetic.html",
  "type": "Section",
  "number": "1.1",
  "title": "Basic arithmetic and geometry",
  "body": " Basic arithmetic and geometry    A complex number is just an ordered pair of real numbers. But we write instead of .  We call the real part of and denote it by . We call the imaginary part of and denote it by .   Notice that and are real numbers!   We write for the set of complex numbers.   So yes, is just . But we think of complex numbers as being more than just points in the plane, and it is useful to have notation to reflect this different mode of thinking.    >  Innocuous but important fact  Two complex numbers and are equal if and only if they have the same real and imaginary parts! In other words...      GeoGebra: the real and imaginary parts of a complex number    We add complex numbers by adding their real and imaginary parts independently:   Notice that this is the same as ordinary addition of points (thought of as vectors) in :     GeoGebra: complex addition    Because complex numbers are simply points in the plane, added in the familiar way, we can import a lot of our knowledge of geometry and multi-variable calculus to our study of complex numbers.  But something must be new! We multiply complex numbers using the following definition, motivated by treating as an indeterminant and then simplifying using .   On your own, you should expand and then simplify by assuming .    This operation is totally new. Later we will do some work to understand better what is going on. You can go ahead and try to get a feel for things by dragging and around on this GeoGebra graph, though.   GeoGebra: complex multiplications      We identify the real number with the complex number , corresponding to the point on the -axis. It would be very upsetting if the new complex addition and multiplication we've defined were inconsistent with regular operations on real numbers; luckily this is not the case.   Complex addition and multiplication restrict to ordinary addition and multiplication of real numbers:    Show directly from the definitions that complex addition and multiplication have the following properties.   ( is an additive identity)   ( is a multiplicative identity)    (additional and multiplication are commutative)    (addition and multiplication are associative)    (multiplication distributes over addition)     The modulus (aka complex absolute value) of a complex number is defined to be , its distance from the origin.  The conjugate of a complex number is the complex number . (In other words, the conjugate is defined by and .)      GeoGebra: conjugation    Since the modulus is just the usual distance from the origin, and addition of complex numbers is just vector addition, we inherit the triangle inequality from real analysis.   The Triangle Inequality   for all .   Written in terms of and , the product of a complex number and its conjugate is a difference of squares:   Assuming that is nonzero, we rearrange this equation to obtain a formula for .   Every nonzero complex number has a multiplicative inverse given by either of the following equivalent formulas.       GeoGebra: reciprocal     Prove that the following identities hold for all .                           It is clear from our definition that has something that does not: a square-root of !   In fact, as we will show later, has roots of all non-constant polynomials.    Fundamental Theorem of Algebra  Every polynomial with complex coefficients of degree has a factorization   where the roots are distinct, and . This factorization is unique up to permuting the factors.   This Theorem follows by induction on degree from...   Every nonconstant polynomial with complex coefficients has a complex root.   We will prove this later in the course! Even though it seems like (and is) a theorem of algebra, its proof really needs analytic tools.  There is a complex solution to .  "
},
{
  "id": "def-complex-number",
  "level": "2",
  "url": "section-arithmetic.html#def-complex-number",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  A complex number is just an ordered pair of real numbers. But we write instead of .  We call the real part of and denote it by . We call the imaginary part of and denote it by .   Notice that and are real numbers!   We write for the set of complex numbers.   So yes, is just . But we think of complex numbers as being more than just points in the plane, and it is useful to have notation to reflect this different mode of thinking.    "
},
{
  "id": "observation-1",
  "level": "2",
  "url": "section-arithmetic.html#observation-1",
  "type": "Observation",
  "number": "1.1.2",
  "title": "Innocuous but important fact.",
  "body": " Innocuous but important fact  Two complex numbers and are equal if and only if they have the same real and imaginary parts! In other words...   "
},
{
  "id": "figure-1",
  "level": "2",
  "url": "section-arithmetic.html#figure-1",
  "type": "Figure",
  "number": "1.1.3",
  "title": "",
  "body": " GeoGebra: the real and imaginary parts of a complex number   "
},
{
  "id": "figure-2",
  "level": "2",
  "url": "section-arithmetic.html#figure-2",
  "type": "Figure",
  "number": "1.1.4",
  "title": "",
  "body": " GeoGebra: complex addition   "
},
{
  "id": "figure-3",
  "level": "2",
  "url": "section-arithmetic.html#figure-3",
  "type": "Figure",
  "number": "1.1.5",
  "title": "",
  "body": " GeoGebra: complex multiplications   "
},
{
  "id": "observation-2",
  "level": "2",
  "url": "section-arithmetic.html#observation-2",
  "type": "Observation",
  "number": "1.1.6",
  "title": "",
  "body": " Complex addition and multiplication restrict to ordinary addition and multiplication of real numbers:   "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "section-arithmetic.html#exercise-1",
  "type": "Checkpoint",
  "number": "1.1.7",
  "title": "",
  "body": "Show directly from the definitions that complex addition and multiplication have the following properties.   ( is an additive identity)   ( is a multiplicative identity)    (additional and multiplication are commutative)    (addition and multiplication are associative)    (multiplication distributes over addition)  "
},
{
  "id": "def-modulus",
  "level": "2",
  "url": "section-arithmetic.html#def-modulus",
  "type": "Definition",
  "number": "1.1.8",
  "title": "",
  "body": "  The modulus (aka complex absolute value) of a complex number is defined to be , its distance from the origin.  The conjugate of a complex number is the complex number . (In other words, the conjugate is defined by and .)   "
},
{
  "id": "figure-4",
  "level": "2",
  "url": "section-arithmetic.html#figure-4",
  "type": "Figure",
  "number": "1.1.9",
  "title": "",
  "body": " GeoGebra: conjugation   "
},
{
  "id": "lemma-1",
  "level": "2",
  "url": "section-arithmetic.html#lemma-1",
  "type": "Lemma",
  "number": "1.1.10",
  "title": "The Triangle Inequality.",
  "body": " The Triangle Inequality   for all .  "
},
{
  "id": "lemma-2",
  "level": "2",
  "url": "section-arithmetic.html#lemma-2",
  "type": "Lemma",
  "number": "1.1.11",
  "title": "",
  "body": " Every nonzero complex number has a multiplicative inverse given by either of the following equivalent formulas.   "
},
{
  "id": "figure-5",
  "level": "2",
  "url": "section-arithmetic.html#figure-5",
  "type": "Figure",
  "number": "1.1.12",
  "title": "",
  "body": " GeoGebra: reciprocal   "
},
{
  "id": "problem-1",
  "level": "2",
  "url": "section-arithmetic.html#problem-1",
  "type": "Problem",
  "number": "1.1.13",
  "title": "",
  "body": " Prove that the following identities hold for all .                         "
},
{
  "id": "theorem-1",
  "level": "2",
  "url": "section-arithmetic.html#theorem-1",
  "type": "Theorem",
  "number": "1.1.14",
  "title": "Fundamental Theorem of Algebra.",
  "body": " Fundamental Theorem of Algebra  Every polynomial with complex coefficients of degree has a factorization   where the roots are distinct, and . This factorization is unique up to permuting the factors.  "
},
{
  "id": "theorem-2",
  "level": "2",
  "url": "section-arithmetic.html#theorem-2",
  "type": "Theorem",
  "number": "1.1.15",
  "title": "",
  "body": " Every nonconstant polynomial with complex coefficients has a complex root.  "
},
{
  "id": "example-1",
  "level": "2",
  "url": "section-arithmetic.html#example-1",
  "type": "Example",
  "number": "1.1.16",
  "title": "",
  "body": "There is a complex solution to . "
},
{
  "id": "section-polar",
  "level": "1",
  "url": "section-polar.html",
  "type": "Section",
  "number": "1.2",
  "title": "Polar representation and Euler's Formula",
  "body": " Polar representation and Euler's Formula  As a point in the plane, a complex number has a polar representation:    In precalculus you would've written . This is the same thing, just written using instead of .     GeoGebra: polar representation    Notice that is simply the modulus of : . The angle between the positive real axis and the ray is called the argument of and is denoted . Notice that is a multivalued function! Adding to does not change .    The principal argument of a complex number , denoted , is the value of that satisfies .     Warning: Some authors use the convention that . Use caution when consulting other sources!    So, for , the possible values of are , where can be any integer.   , .   Euler's Formula  For now we take the following as a definition ; later we will see why it is justified.     Using Euler's Formula, we obtain the exponential form of the polar representation of :             Use trig identities to prove the following identities about          Let's try applying Euler's Formula to and then separately to .    The results of these two activities ought to be the same, and indeed if we identify real and imaginary parts we obtain the familiar addition formulas for sine and cosine!    This is a useful way to derive the addition formulas for sine and cosine without memorizing them. But the way we've presented things is a bit backward; in fact, it's the trig identities that allow us to conclude that .    Use trig identities to prove the following faacts about the argument.      With the help of the polar representation, we are in a position to understand exactly how complex multiplication works. Writing and , we have   So the product has modulus and argument .    GeoGebra: multiplication in polar coordinates     De Moivre's Theorem  We can identify real and imaginary parts in the following equation to obtain some trig identities.   Let's illustrate this by considering the example . Identifying real and imaginary parts of the equation   gives     Roots of unity  It is a special case of the Fundamental Theorem of Algebra ( ) that every nonzero complex number has exactly  th roots, i.e., solutions to . The case is already interesting (and of particular importance), so let's start there.  Finding the solutions to is made easier by considering the various polar representations of :   A reasonable guess (which turns out to be correct!) is that we can just divide the exponent on the righthand side by to obtain the possible values of .    For an integer , the th roots of unity are the complex numbers , where     Prove that the numbers listed in are in fact different numbers! Explain why they appear equally spaced around the unit circle .   The th roots of unity are:    Don't forget Euler's Formula! E.g. .     We can find the th roots of any nonzero complex number in a similar way. Suppose that is, say, the principal argument of , and consider the next many arguments:   Now simply take each of these different representations for to the th power to obtain the following list of -many th roots of .   Oh, we could instead have obtained this list by finding the first th root of and multiplying by all the th roots of unity! The th roots of are...   where are the th roots of unity.    GeoGebra: nth roots     Let be an unspecified real number. We are going to find the two square roots of the complex number in cartesian form ( ).    GeoGebra: roots example    Let's start by defining and .   So, in polar form, can be written as for any . So we should be able to take and as our two square-roots. But we still want them in rectangular coordinates, so we use Euler's Formula, some trig identities, and the fact that .   The other square-root is .    "
},
{
  "id": "figure-6",
  "level": "2",
  "url": "section-polar.html#figure-6",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": " GeoGebra: polar representation   "
},
{
  "id": "def-principal-arg",
  "level": "2",
  "url": "section-polar.html#def-principal-arg",
  "type": "Definition",
  "number": "1.2.2",
  "title": "",
  "body": "  The principal argument of a complex number , denoted , is the value of that satisfies .     Warning: Some authors use the convention that . Use caution when consulting other sources!   "
},
{
  "id": "example-2",
  "level": "2",
  "url": "section-polar.html#example-2",
  "type": "Example",
  "number": "1.2.3",
  "title": "",
  "body": " , . "
},
{
  "id": "identity-1",
  "level": "2",
  "url": "section-polar.html#identity-1",
  "type": "Identity",
  "number": "1.2.4",
  "title": "Euler's Formula.",
  "body": " Euler's Formula  For now we take the following as a definition ; later we will see why it is justified.   "
},
{
  "id": "example-3",
  "level": "2",
  "url": "section-polar.html#example-3",
  "type": "Example",
  "number": "1.2.5",
  "title": "",
  "body": "         "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "section-polar.html#exercise-2",
  "type": "Checkpoint",
  "number": "1.2.6",
  "title": "",
  "body": "Use trig identities to prove the following identities about        "
},
{
  "id": "observation-3",
  "level": "2",
  "url": "section-polar.html#observation-3",
  "type": "Observation",
  "number": "1.2.7",
  "title": "",
  "body": " Let's try applying Euler's Formula to and then separately to .    The results of these two activities ought to be the same, and indeed if we identify real and imaginary parts we obtain the familiar addition formulas for sine and cosine!    This is a useful way to derive the addition formulas for sine and cosine without memorizing them. But the way we've presented things is a bit backward; in fact, it's the trig identities that allow us to conclude that .   "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "section-polar.html#exercise-3",
  "type": "Checkpoint",
  "number": "1.2.8",
  "title": "",
  "body": "Use trig identities to prove the following faacts about the argument.     "
},
{
  "id": "figure-7",
  "level": "2",
  "url": "section-polar.html#figure-7",
  "type": "Figure",
  "number": "1.2.9",
  "title": "",
  "body": " GeoGebra: multiplication in polar coordinates   "
},
{
  "id": "def-roots-of-unity",
  "level": "2",
  "url": "section-polar.html#def-roots-of-unity",
  "type": "Definition",
  "number": "1.2.10",
  "title": "",
  "body": "  For an integer , the th roots of unity are the complex numbers , where    "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "section-polar.html#exercise-4",
  "type": "Checkpoint",
  "number": "1.2.11",
  "title": "",
  "body": "Prove that the numbers listed in are in fact different numbers! Explain why they appear equally spaced around the unit circle . "
},
{
  "id": "example-4",
  "level": "2",
  "url": "section-polar.html#example-4",
  "type": "Example",
  "number": "1.2.12",
  "title": "",
  "body": " The th roots of unity are:    Don't forget Euler's Formula! E.g. .   "
},
{
  "id": "figure-8",
  "level": "2",
  "url": "section-polar.html#figure-8",
  "type": "Figure",
  "number": "1.2.13",
  "title": "",
  "body": " GeoGebra: nth roots   "
},
{
  "id": "example-5",
  "level": "2",
  "url": "section-polar.html#example-5",
  "type": "Example",
  "number": "1.2.14",
  "title": "",
  "body": " Let be an unspecified real number. We are going to find the two square roots of the complex number in cartesian form ( ).    GeoGebra: roots example    Let's start by defining and .   So, in polar form, can be written as for any . So we should be able to take and as our two square-roots. But we still want them in rectangular coordinates, so we use Euler's Formula, some trig identities, and the fact that .   The other square-root is .  "
},
{
  "id": "section-3",
  "level": "1",
  "url": "section-3.html",
  "type": "Section",
  "number": "1.3",
  "title": "The Stereographic Projection",
  "body": " The Stereographic Projection    GeoGebra: stereographic projection      GeoGebra: stereographic projection in cross-section    "
},
{
  "id": "figure-10",
  "level": "2",
  "url": "section-3.html#figure-10",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": " GeoGebra: stereographic projection   "
},
{
  "id": "figure-11",
  "level": "2",
  "url": "section-3.html#figure-11",
  "type": "Figure",
  "number": "1.3.2",
  "title": "",
  "body": " GeoGebra: stereographic projection in cross-section   "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
