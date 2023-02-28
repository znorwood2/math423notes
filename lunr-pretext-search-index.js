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
  "body": " The Stereographic Projection  For now, see the typed PDF posted to Canvas. Here are some visual tools:    GeoGebra: stereographic projection      GeoGebra: stereographic projection in cross-section    "
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
  "id": "section-4",
  "level": "1",
  "url": "section-4.html",
  "type": "Section",
  "number": "1.4",
  "title": "Some elementary functions",
  "body": " Some elementary functions  The rest of the course will be devoted to studying functions of a complex variable, that is, functions where . Because is inherently 2-dimensional, we cannot reasonably hope to graph a complex-valued function in the way that we did for functions in calculus. Instead, we think of complex-valued functions geometrically as transformations of the plane. In trying to understand a particular function, we will pay special attention to how familiar geometric shapes like lines and circles are transformed.   Multiplication and addition by a fixed number  The most basic complex-valued functions simply take a and add to it, or multiply it by, a fixed complex number .    GeoGebra: translation    Addition by a fixed complex number is just vector-translation. Remember that addition of complex numbers is just vector addition from multivariable calculus.    GeoGebra: multiplication by a fixed number    Multiplication by a fixed complex number is best thought of in polar coordinates, as the composite of two transformations. Notice that , for , just scales every point in the plane by a factor of . And the map , for a fixed , rotates the plane counterclockwise by radians. So the map is the composite of these two maps: it scales by a factor of and rotates by radians.    If you have seen some linear algebra, it is worth noting that scaling and rotating are linear maps! And you can analyze them using the tools of linear algebra. To do this, we first observe that the standard basis vectors and have (respectively) representations and as complex numbers. Since the maps and are both linear, their standard matrix representations can be found by looking at where they send the standard basis vectors.   The more interesting of the two maps is the rotation map , so let's see where it sends the standard basis vectors:   These two results give us the columns of the standard matrix of the linear transformation :   You might recognize this from linear algebra as a rotation matrix.     The Square Function  One of the simplest nontrivial functions is the squaring function . As we will see in many of these examples, it is useful to consider the map in polar coordinates.   In other words, the function is defined by declaring and .  The circle is mapped to the circle , traversed at double the angular velocity. In particular, the unit circle is mapped to itself, but traversed twice.    GeoGebra: Squaring 1      GeoGebra: Squaring 2       The Square Root Function  Every nonzero complex number should have two square-roots. The problem is that we want to choose one in a reasonable way. (We cannot simply choose the 'positive' one as we can with real numbers.) Looking in polar coordinates suggests that we should define   (Notice that the square-root on the right is the ordinary positive square-root of the nonnegative real number .)  But a complex number has many arguments ! The trouble comes from picking a particular .    GeoGebra: Square roots    As you can see in , using the principal argument for introduces a discontinuity at every point along the negative real axis. To fix this, we take a branch cut .    The principal branch of the square-root function is the function defined by .     Warning: Negative real numbers still have complex square roots!!! They are excluded from the domain of the principal branch of the square-root function only to ensure that the function is continuous. More about this later.  (In fact, the formula in can be used to get a square-root of a negative real number. Plugging in , we obtain as a square-root of .)  So the two square-roots of a complex number are and . (The first of these is the principal branch of the square-root, as long as .)        The Complex Exponential  Euler's Formula tells us how to exponentiate so-called purely imaginary numbers, that is numbers of the form where . But what about other complex numbers? Well, just decompose as , the sum of a real number (which we know how to exponentiate) and a purely imaginary number :   In other words, is the polar representation of : and .       A complex number is a period of the function if, for every , we have . A function is periodic if it has some nonzero period.      The complex exponential is -periodic.     For all we have:     For every real number , the quantity is a real number.      GeoGebra: The exponential map     We conclude from our previous discussion that the range of the exponential map is . This leads us to wonder about defining a logarithm.   The complex logarithm  We would like to define a log map that is inverse to the exponential. As we found with the square-root, we will have to make a branch cut in order to choose a specific log continuously, though.  Given , we want to find a solution to the equation . We need and . In fact we must have this; all logarithms of take the form for some choice of . So all logarithms of take the form     The principal branch of the log is the function defined by .    As with the square-root, we have to cut the domain in order for the function to be continuous. And, as with the square-root, negative real numbers still have logarithms!    GeoGebra: The log      All possible logs of are , .       Branch cuts and branch points  We can view the log, for example, as a multi-valued function on . Each time we use log, we need to choose a branch (often the principal one).    If is an open set, then a branch of the log defined on is a continuous function for which for all .  A branch point of a multi-valued function is a point such that, for every , the function cannot be given a continuous single-valued definition on .     is the ball of radius centered at . Don't worry, we'll discuss these things in more detail in later sections.    is a branch point of log.   The function has two branch points, at and .     General power functions  Now that we have the log, we can define general power functions.    For any , the principal branch of the power function  is the function defined as follows.      This agrees with our earlier definition of the principal branch of the square-root function:     Let's find all possible values of .   Since the possible values of are , , we have   These are all real numbers!!!     Trig functions  Standard trig functions can be defined in terms of the exponential.    Sine and cosine are defined at all complex numbers  as follows.      Remember your Taylor Series from calculus? Write down the Taylor series for the exponential function, centered at , and plug in and simplify. Do the same thing but plug in and simplify. You should be very close to a Taylor series for cosine.    Warning: These definitions are motivated by Euler's Formula: e.g. for ,   But in general! In particular, the quantity on the right is real-valued, whereas is not. And we can just expand out and examine its real and imaginary parts:   So , which does not typically equal .  The tangent function can be defined by , and hyperbolic trig functions can also be defined. You will explore all this on the homework.   "
},
{
  "id": "figure-12",
  "level": "2",
  "url": "section-4.html#figure-12",
  "type": "Figure",
  "number": "1.4.1",
  "title": "",
  "body": " GeoGebra: translation   "
},
{
  "id": "figure-13",
  "level": "2",
  "url": "section-4.html#figure-13",
  "type": "Figure",
  "number": "1.4.2",
  "title": "",
  "body": " GeoGebra: multiplication by a fixed number   "
},
{
  "id": "exploration-1",
  "level": "2",
  "url": "section-4.html#exploration-1",
  "type": "Exploration",
  "number": "1.4.1",
  "title": "",
  "body": " If you have seen some linear algebra, it is worth noting that scaling and rotating are linear maps! And you can analyze them using the tools of linear algebra. To do this, we first observe that the standard basis vectors and have (respectively) representations and as complex numbers. Since the maps and are both linear, their standard matrix representations can be found by looking at where they send the standard basis vectors.   The more interesting of the two maps is the rotation map , so let's see where it sends the standard basis vectors:   These two results give us the columns of the standard matrix of the linear transformation :   You might recognize this from linear algebra as a rotation matrix.  "
},
{
  "id": "figure-14",
  "level": "2",
  "url": "section-4.html#figure-14",
  "type": "Figure",
  "number": "1.4.3",
  "title": "",
  "body": " GeoGebra: Squaring 1   "
},
{
  "id": "figure-15",
  "level": "2",
  "url": "section-4.html#figure-15",
  "type": "Figure",
  "number": "1.4.4",
  "title": "",
  "body": " GeoGebra: Squaring 2   "
},
{
  "id": "fig-geogebra-square-roots",
  "level": "2",
  "url": "section-4.html#fig-geogebra-square-roots",
  "type": "Figure",
  "number": "1.4.5",
  "title": "",
  "body": " GeoGebra: Square roots   "
},
{
  "id": "p-99",
  "level": "2",
  "url": "section-4.html#p-99",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "branch cut "
},
{
  "id": "def-principal-square-root",
  "level": "2",
  "url": "section-4.html#def-principal-square-root",
  "type": "Definition",
  "number": "1.4.6",
  "title": "",
  "body": "  The principal branch of the square-root function is the function defined by .   "
},
{
  "id": "example-6",
  "level": "2",
  "url": "section-4.html#example-6",
  "type": "Example",
  "number": "1.4.7",
  "title": "",
  "body": "  "
},
{
  "id": "p-104",
  "level": "2",
  "url": "section-4.html#p-104",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "purely imaginary "
},
{
  "id": "observation-4",
  "level": "2",
  "url": "section-4.html#observation-4",
  "type": "Observation",
  "number": "1.4.8",
  "title": "",
  "body": "  "
},
{
  "id": "def-period",
  "level": "2",
  "url": "section-4.html#def-period",
  "type": "Definition",
  "number": "1.4.9",
  "title": "",
  "body": "  A complex number is a period of the function if, for every , we have . A function is periodic if it has some nonzero period.   "
},
{
  "id": "prop-exp-periodic",
  "level": "2",
  "url": "section-4.html#prop-exp-periodic",
  "type": "Proposition",
  "number": "1.4.10",
  "title": "",
  "body": "  The complex exponential is -periodic.   "
},
{
  "id": "proof-1",
  "level": "2",
  "url": "section-4.html#proof-1",
  "type": "Proof",
  "number": "1.4.4.1",
  "title": "",
  "body": " For all we have:   "
},
{
  "id": "example-7",
  "level": "2",
  "url": "section-4.html#example-7",
  "type": "Example",
  "number": "1.4.11",
  "title": "",
  "body": " For every real number , the quantity is a real number.  "
},
{
  "id": "fig-geogebra-exp",
  "level": "2",
  "url": "section-4.html#fig-geogebra-exp",
  "type": "Figure",
  "number": "1.4.12",
  "title": "",
  "body": " GeoGebra: The exponential map   "
},
{
  "id": "def-principal-log",
  "level": "2",
  "url": "section-4.html#def-principal-log",
  "type": "Definition",
  "number": "1.4.13",
  "title": "",
  "body": "  The principal branch of the log is the function defined by .   "
},
{
  "id": "fig-geogebra-log",
  "level": "2",
  "url": "section-4.html#fig-geogebra-log",
  "type": "Figure",
  "number": "1.4.14",
  "title": "",
  "body": " GeoGebra: The log   "
},
{
  "id": "example-8",
  "level": "2",
  "url": "section-4.html#example-8",
  "type": "Example",
  "number": "1.4.15",
  "title": "",
  "body": "  All possible logs of are , .  "
},
{
  "id": "def-cts-branch",
  "level": "2",
  "url": "section-4.html#def-cts-branch",
  "type": "Definition",
  "number": "1.4.16",
  "title": "",
  "body": "  If is an open set, then a branch of the log defined on is a continuous function for which for all .  A branch point of a multi-valued function is a point such that, for every , the function cannot be given a continuous single-valued definition on .   "
},
{
  "id": "example-9",
  "level": "2",
  "url": "section-4.html#example-9",
  "type": "Example",
  "number": "1.4.17",
  "title": "",
  "body": "  is a branch point of log.  "
},
{
  "id": "example-10",
  "level": "2",
  "url": "section-4.html#example-10",
  "type": "Example",
  "number": "1.4.18",
  "title": "",
  "body": "The function has two branch points, at and .  "
},
{
  "id": "def-power-function",
  "level": "2",
  "url": "section-4.html#def-power-function",
  "type": "Definition",
  "number": "1.4.19",
  "title": "",
  "body": "  For any , the principal branch of the power function  is the function defined as follows.    "
},
{
  "id": "example-11",
  "level": "2",
  "url": "section-4.html#example-11",
  "type": "Example",
  "number": "1.4.20",
  "title": "",
  "body": " This agrees with our earlier definition of the principal branch of the square-root function:   "
},
{
  "id": "example-12",
  "level": "2",
  "url": "section-4.html#example-12",
  "type": "Example",
  "number": "1.4.21",
  "title": "",
  "body": " Let's find all possible values of .   Since the possible values of are , , we have   These are all real numbers!!!  "
},
{
  "id": "def-sine-cosine",
  "level": "2",
  "url": "section-4.html#def-sine-cosine",
  "type": "Definition",
  "number": "1.4.22",
  "title": "",
  "body": "  Sine and cosine are defined at all complex numbers  as follows.    "
},
{
  "id": "sec-regions",
  "level": "1",
  "url": "sec-regions.html",
  "type": "Section",
  "number": "2.1",
  "title": "Regions in the plane",
  "body": " Regions in the plane  We need to survey some basic topology of the plane and introduce some definitions. This will be very familiar to some of you and less familiar to others. Rest assured that we will not do any serious proofs in this course.    For and we define the ball or disk of radius centered at .  A set is open if for every there is for which . A set is closed if its complement is open.   If you have seen sequential limits before, you should check that is closed if and only if every convergent sequence of elements of has a limit in .       GeoGebra: balls      GeoGebra: balls       The unbounded sector is open.    The vertical strip is open.    The closed annulus is closed.     If you have seen some topology, you might recognize that these are all continuous preimages of open or closed sets.      A set is path-connected iff any two points in can be joined by a continuous path that does not leave ; that is, iff for all there is a continuous function with and .  A domain is a set that is both open and path-connected.       is path-connected! For any we can take , the standard parametrization of the line segment from to .  But is not path-connected. No continuous path starting in the upper half-plane can reach the lower half-plane without crossing the real axis.  How do you prove this carefully? Intermediate Value Theorem...       If and , then is star-shaped with respect to iff for all the straight line segment connecting to lies completely in .  You could state this precisely by using the standard parametrization of the line segment. ' is star-shaped wrt iff for all we have .'    A set is convex if is star-shaped with respect to every one of its elements. We just say that is star-shaped if there is at least one with respect to which is star-shaped.      GeoGebra: star-shaped regions      The slit disk is star-shaped wrt but not wrt any point in the fourth quadrant (e.g. ).  An annulus (e.g. ) is not star-shaped.   Make sure you understand that for nonempty sets , the following implications hold. Give examples to show that neither of these implications reverses.  "
},
{
  "id": "def-open",
  "level": "2",
  "url": "sec-regions.html#def-open",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  For and we define the ball or disk of radius centered at .  A set is open if for every there is for which . A set is closed if its complement is open.   If you have seen sequential limits before, you should check that is closed if and only if every convergent sequence of elements of has a limit in .    "
},
{
  "id": "fig-geogebra-open-ball",
  "level": "2",
  "url": "sec-regions.html#fig-geogebra-open-ball",
  "type": "Figure",
  "number": "2.1.2",
  "title": "",
  "body": " GeoGebra: balls   "
},
{
  "id": "fig-geogebra-open-rectangle",
  "level": "2",
  "url": "sec-regions.html#fig-geogebra-open-rectangle",
  "type": "Figure",
  "number": "2.1.3",
  "title": "",
  "body": " GeoGebra: balls   "
},
{
  "id": "example-13",
  "level": "2",
  "url": "sec-regions.html#example-13",
  "type": "Example",
  "number": "2.1.4",
  "title": "",
  "body": "   The unbounded sector is open.    The vertical strip is open.    The closed annulus is closed.     If you have seen some topology, you might recognize that these are all continuous preimages of open or closed sets.   "
},
{
  "id": "def-path-connected",
  "level": "2",
  "url": "sec-regions.html#def-path-connected",
  "type": "Definition",
  "number": "2.1.5",
  "title": "",
  "body": "  A set is path-connected iff any two points in can be joined by a continuous path that does not leave ; that is, iff for all there is a continuous function with and .  A domain is a set that is both open and path-connected.   "
},
{
  "id": "example-14",
  "level": "2",
  "url": "sec-regions.html#example-14",
  "type": "Example",
  "number": "2.1.6",
  "title": "",
  "body": "  is path-connected! For any we can take , the standard parametrization of the line segment from to .  But is not path-connected. No continuous path starting in the upper half-plane can reach the lower half-plane without crossing the real axis.  How do you prove this carefully? Intermediate Value Theorem...    "
},
{
  "id": "def-star-shaped",
  "level": "2",
  "url": "sec-regions.html#def-star-shaped",
  "type": "Definition",
  "number": "2.1.7",
  "title": "",
  "body": "  If and , then is star-shaped with respect to iff for all the straight line segment connecting to lies completely in .  You could state this precisely by using the standard parametrization of the line segment. ' is star-shaped wrt iff for all we have .'    A set is convex if is star-shaped with respect to every one of its elements. We just say that is star-shaped if there is at least one with respect to which is star-shaped.   "
},
{
  "id": "fig-geogebra-star-shaped",
  "level": "2",
  "url": "sec-regions.html#fig-geogebra-star-shaped",
  "type": "Figure",
  "number": "2.1.8",
  "title": "",
  "body": " GeoGebra: star-shaped regions   "
},
{
  "id": "example-15",
  "level": "2",
  "url": "sec-regions.html#example-15",
  "type": "Example",
  "number": "2.1.9",
  "title": "",
  "body": "  The slit disk is star-shaped wrt but not wrt any point in the fourth quadrant (e.g. ).  An annulus (e.g. ) is not star-shaped.  "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "sec-regions.html#exercise-5",
  "type": "Checkpoint",
  "number": "2.1.10",
  "title": "",
  "body": "Make sure you understand that for nonempty sets , the following implications hold. Give examples to show that neither of these implications reverses. "
},
{
  "id": "sec-limits-continuity",
  "level": "1",
  "url": "sec-limits-continuity.html",
  "type": "Section",
  "number": "2.2",
  "title": "Limits and continuity",
  "body": " Limits and continuity  import definitions from multivariable calculus  "
},
{
  "id": "sec-derivative",
  "level": "1",
  "url": "sec-derivative.html",
  "type": "Section",
  "number": "3.1",
  "title": "The Complex Derivative",
  "body": " The Complex Derivative    A function defined on a domain is differentiable at if the following limit exists.   The value of the limit is written or .  We say that is analytic (or holomorphic) at if there is such that is differentiable at every .  If is analytic at every point in , then we say that is entire . (In particular this means is defined at every point in .)     NB. This looks like the definition of derivative from calculus, and indeed we will discover many similarities between the complex derivative and real derivatives. However, a function can be thought of as a function , and there is a notion of real-differentiability for such functions. Complex-differentiability of as a function is much stronger than real-differentiability as a function . This should become clearer as we discover some general properties of analytic functions, especially the Cauchy–Riemann Equations.   A function can be decomposed into two component functions and so that . Notice that and are functions : their graphs are surfaces, just like in multivariable calculus. Then is real-differentiable if and only if both and are differentiable (meaning that they have well-defined tangent planes). (This is not usually taken as the definition , but it is equivalent.)     "
},
{
  "id": "def-deriv",
  "level": "2",
  "url": "sec-derivative.html#def-deriv",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": "  A function defined on a domain is differentiable at if the following limit exists.   The value of the limit is written or .  We say that is analytic (or holomorphic) at if there is such that is differentiable at every .  If is analytic at every point in , then we say that is entire . (In particular this means is defined at every point in .)   "
},
{
  "id": "investigation-1",
  "level": "2",
  "url": "sec-derivative.html#investigation-1",
  "type": "Investigation",
  "number": "3.1.1",
  "title": "",
  "body": " A function can be decomposed into two component functions and so that . Notice that and are functions : their graphs are surfaces, just like in multivariable calculus. Then is real-differentiable if and only if both and are differentiable (meaning that they have well-defined tangent planes). (This is not usually taken as the definition , but it is equivalent.)  "
},
{
  "id": "sec-cauchy-riemann",
  "level": "1",
  "url": "sec-cauchy-riemann.html",
  "type": "Section",
  "number": "3.2",
  "title": "The Cauchy–Riemann Equations",
  "body": " The Cauchy–Riemann Equations  "
},
{
  "id": "sec-inverse",
  "level": "1",
  "url": "sec-inverse.html",
  "type": "Section",
  "number": "3.3",
  "title": "Analyticity of inverse functions",
  "body": " Analyticity of inverse functions  "
},
{
  "id": "sec-harmonic",
  "level": "1",
  "url": "sec-harmonic.html",
  "type": "Section",
  "number": "3.4",
  "title": "Harmonic functions",
  "body": " Harmonic functions  Motivated by Laplace's Equation which is very important in mathematical physics, we make the following definition.    A function is harmonic if the partial derivatives all exist and are continuous, and , i.e., .      If is analytic, then and are harmonic functions.     Later we will show that the real and imaginary parts of analytic functions have continuous partial derivatives of all orders. So let's not worry about that part for now.  This is just an application of the Cauchy–Riemann Equations and equality of mixed partials (sometimes called Clairaut's Theorem by calculus textbooks):   Rearranging gives . A very similar proof works for .    The function is harmonic, since it is the real part of the analytic function .     If is harmonic on a domain and is a function for which is analytic on , then we say that is a harmonic conjugate of .    State and prove something to the effect that harmonic conjugates are unique up to an additive constant.  Suppose that and are both analytic. Then is analytic too, but it is also real-valued. So is constant.    Find a harmonic conjugate for .   First notice that , so is harmonic.  Solve the CR equations. Starting with we conclude that for some function . Differentiating wrt and using the CR equations again gives which means (calculus) that . We conclude that .  What analytic function is ? Look:     An abstract version of the method used in can be used to prove the following general theorem.    Let be an open disk or an open (filled-in) rectangle. Let be a harmonic function on . Then has a harmonic conjugate on , unique up to adding a constant.    The right class of domains to which applies is the class of simply connected domains. A domain is simply connected if and only if every loop in can be shrunk continuously to a point without leaving . E.g. a disk is simply connected but an annulus is not.   NB.  does not hold in general for domains that are not simply connected, e.g. an annulus or . For example, consider . You will probably be asked on the homework to explore this example.  "
},
{
  "id": "def-harmonic",
  "level": "2",
  "url": "sec-harmonic.html#def-harmonic",
  "type": "Definition",
  "number": "3.4.1",
  "title": "",
  "body": "  A function is harmonic if the partial derivatives all exist and are continuous, and , i.e., .   "
},
{
  "id": "thm-analytic-harmonic",
  "level": "2",
  "url": "sec-harmonic.html#thm-analytic-harmonic",
  "type": "Theorem",
  "number": "3.4.2",
  "title": "",
  "body": "  If is analytic, then and are harmonic functions.   "
},
{
  "id": "proof-2",
  "level": "2",
  "url": "sec-harmonic.html#proof-2",
  "type": "Proof",
  "number": "3.4.1",
  "title": "",
  "body": " Later we will show that the real and imaginary parts of analytic functions have continuous partial derivatives of all orders. So let's not worry about that part for now.  This is just an application of the Cauchy–Riemann Equations and equality of mixed partials (sometimes called Clairaut's Theorem by calculus textbooks):   Rearranging gives . A very similar proof works for .  "
},
{
  "id": "example-16",
  "level": "2",
  "url": "sec-harmonic.html#example-16",
  "type": "Example",
  "number": "3.4.3",
  "title": "",
  "body": " The function is harmonic, since it is the real part of the analytic function .  "
},
{
  "id": "def-harmonic-conjugate",
  "level": "2",
  "url": "sec-harmonic.html#def-harmonic-conjugate",
  "type": "Definition",
  "number": "3.4.4",
  "title": "",
  "body": "  If is harmonic on a domain and is a function for which is analytic on , then we say that is a harmonic conjugate of .   "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "sec-harmonic.html#exercise-6",
  "type": "Checkpoint",
  "number": "3.4.5",
  "title": "",
  "body": "State and prove something to the effect that harmonic conjugates are unique up to an additive constant.  Suppose that and are both analytic. Then is analytic too, but it is also real-valued. So is constant.  "
},
{
  "id": "example-harmonic-conjugate",
  "level": "2",
  "url": "sec-harmonic.html#example-harmonic-conjugate",
  "type": "Example",
  "number": "3.4.6",
  "title": "",
  "body": " Find a harmonic conjugate for .   First notice that , so is harmonic.  Solve the CR equations. Starting with we conclude that for some function . Differentiating wrt and using the CR equations again gives which means (calculus) that . We conclude that .  What analytic function is ? Look:    "
},
{
  "id": "thm-harmonic-conjugates",
  "level": "2",
  "url": "sec-harmonic.html#thm-harmonic-conjugates",
  "type": "Theorem",
  "number": "3.4.7",
  "title": "",
  "body": "  Let be an open disk or an open (filled-in) rectangle. Let be a harmonic function on . Then has a harmonic conjugate on , unique up to adding a constant.   "
},
{
  "id": "p-182",
  "level": "2",
  "url": "sec-harmonic.html#p-182",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "simply connected "
},
{
  "id": "sec-conformal",
  "level": "1",
  "url": "sec-conformal.html",
  "type": "Section",
  "number": "3.5",
  "title": "Conformal mappings",
  "body": " Conformal mappings  The idea is that a conformal map should be one that preserves angles . To state this precisely, we will need tangent vectors.    Let be two continuous differentiable paths that intersect at : . Suppose also that and . Define the angle between and as follows.   A function is said to be conformal at if whenever are two continuously differentiable curves with and and , then (and and , so that is defined).    The point of all this is the following theorem.    If is analytic at and , then is conformal at .    This is basically just the Chain Rule and the fact that .   That's it!    There is a converse to this theorem that we state for completeness but we won't prove.    Suppose that is continuously differentiable and conformal on a domain with nonzero gradient at every point in . Then is analytic on , and for every .     The squaring function is (as a polynomial) analytic everywhere. It maps the sector to the sector of twice the aperture. Notice that this function is not conformal at since its derivative is zero there!    The exponential function is conformal at every . It restricts to a conformal equivalence between the horizontal strip to the slit plane .     GeoGebra:      If and are open subsets of and is a conformal bijection, then is called a conformal equivalence .     Don't forget that conformality is equivalent to analytic with derivative . So the Inverse Function Theorem implies that a conformal bijection has local conformal inverses, which can be patched together to give a global conformal inverse. All this to say that conformal equivalence is a symmetric relation: if is conformally equivalent to , then is conformally equivalent to .    Motivation: Suppose that we want to solve 2D Laplace's Equation on a domain subject to some boundary conditions. Maybe isn't so nice. We might try to find a conformally equivalent domain , solve Laplace's Equation on , and then transfer the solution back to .  So it is useful to have a library of conformal equivalences.   The map , , defines a conformal equivalence   where is the upper halfplane .    GeoGebra:      The map defines a conformal equivalence between and the unit disk .  (Why? Well, iff is closer to than to , iff , iff .)  Why is it conformal? Why is it a bijection? For the answers to those and other questions, look to the next Section!!!   "
},
{
  "id": "def-conformal",
  "level": "2",
  "url": "sec-conformal.html#def-conformal",
  "type": "Definition",
  "number": "3.5.1",
  "title": "",
  "body": "  Let be two continuous differentiable paths that intersect at : . Suppose also that and . Define the angle between and as follows.   A function is said to be conformal at if whenever are two continuously differentiable curves with and and , then (and and , so that is defined).   "
},
{
  "id": "thm-analytic-conformal",
  "level": "2",
  "url": "sec-conformal.html#thm-analytic-conformal",
  "type": "Theorem",
  "number": "3.5.2",
  "title": "",
  "body": "  If is analytic at and , then is conformal at .    This is basically just the Chain Rule and the fact that .   That's it!   "
},
{
  "id": "fact-conformal-analytic",
  "level": "2",
  "url": "sec-conformal.html#fact-conformal-analytic",
  "type": "Fact",
  "number": "3.5.3",
  "title": "",
  "body": "  Suppose that is continuously differentiable and conformal on a domain with nonzero gradient at every point in . Then is analytic on , and for every .   "
},
{
  "id": "example-18",
  "level": "2",
  "url": "sec-conformal.html#example-18",
  "type": "Example",
  "number": "3.5.4",
  "title": "",
  "body": " The squaring function is (as a polynomial) analytic everywhere. It maps the sector to the sector of twice the aperture. Notice that this function is not conformal at since its derivative is zero there!  "
},
{
  "id": "example-19",
  "level": "2",
  "url": "sec-conformal.html#example-19",
  "type": "Example",
  "number": "3.5.5",
  "title": "",
  "body": " The exponential function is conformal at every . It restricts to a conformal equivalence between the horizontal strip to the slit plane .  "
},
{
  "id": "fig-geogebra-exp-conformal",
  "level": "2",
  "url": "sec-conformal.html#fig-geogebra-exp-conformal",
  "type": "Figure",
  "number": "3.5.6",
  "title": "",
  "body": " GeoGebra:   "
},
{
  "id": "def-conformal-equivalence",
  "level": "2",
  "url": "sec-conformal.html#def-conformal-equivalence",
  "type": "Definition",
  "number": "3.5.7",
  "title": "",
  "body": "  If and are open subsets of and is a conformal bijection, then is called a conformal equivalence .   "
},
{
  "id": "investigation-2",
  "level": "2",
  "url": "sec-conformal.html#investigation-2",
  "type": "Investigation",
  "number": "3.5.1",
  "title": "",
  "body": " Don't forget that conformality is equivalent to analytic with derivative . So the Inverse Function Theorem implies that a conformal bijection has local conformal inverses, which can be patched together to give a global conformal inverse. All this to say that conformal equivalence is a symmetric relation: if is conformally equivalent to , then is conformally equivalent to .  "
},
{
  "id": "example-20",
  "level": "2",
  "url": "sec-conformal.html#example-20",
  "type": "Example",
  "number": "3.5.8",
  "title": "",
  "body": " The map , , defines a conformal equivalence   where is the upper halfplane .    GeoGebra:    "
},
{
  "id": "example-21",
  "level": "2",
  "url": "sec-conformal.html#example-21",
  "type": "Example",
  "number": "3.5.10",
  "title": "",
  "body": " The map defines a conformal equivalence between and the unit disk .  (Why? Well, iff is closer to than to , iff , iff .)  Why is it conformal? Why is it a bijection? For the answers to those and other questions, look to the next Section!!!  "
},
{
  "id": "sec-flt",
  "level": "1",
  "url": "sec-flt.html",
  "type": "Section",
  "number": "3.6",
  "title": "Fractional Linear Transformations",
  "body": " Fractional Linear Transformations  "
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
