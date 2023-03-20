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
  "body": " Basic arithmetic and geometry    A complex number is just an ordered pair of real numbers. But we write instead of .  We call the real part of and denote it by . We call the imaginary part of and denote it by .   Notice that and are real numbers!   We write for the set of complex numbers.   So yes, is just . But we think of complex numbers as being more than just points in the plane, and it is useful to have notation to reflect this different mode of thinking.      Innocuous but important fact  Two complex numbers and are equal if and only if they have the same real and imaginary parts! In other words...      GeoGebra: the real and imaginary parts of a complex number    We add complex numbers by adding their real and imaginary parts independently:   Notice that this is the same as ordinary addition of points (thought of as vectors) in :     GeoGebra: complex addition    Because complex numbers are simply points in the plane, added in the familiar way, we can import a lot of our knowledge of geometry and multi-variable calculus to our study of complex numbers.  But something must be new! We multiply complex numbers using the following definition, motivated by treating as an indeterminant and then simplifying using .   On your own, you should expand and then simplify by assuming .    This operation is totally new. Later we will do some work to understand better what is going on. You can go ahead and try to get a feel for things by dragging and around on this GeoGebra graph, though.   GeoGebra: complex multiplications      We identify the real number with the complex number , corresponding to the point on the -axis. It would be very upsetting if the new complex addition and multiplication we've defined were inconsistent with regular operations on real numbers; luckily this is not the case.   Complex addition and multiplication restrict to ordinary addition and multiplication of real numbers:    Show directly from the definitions that complex addition and multiplication have the following properties.   ( is an additive identity)   ( is a multiplicative identity)    (additional and multiplication are commutative)    (addition and multiplication are associative)    (multiplication distributes over addition)     The modulus (aka complex absolute value) of a complex number is defined to be , its distance from the origin.  The conjugate of a complex number is the complex number . (In other words, the conjugate is defined by and .)      GeoGebra: conjugation    Since the modulus is just the usual distance from the origin, and addition of complex numbers is just vector addition, we inherit the triangle inequality from real analysis.   The Triangle Inequality   for all .   Written in terms of and , the product of a complex number and its conjugate is a difference of squares:   Assuming that is nonzero, we rearrange this equation to obtain a formula for .   Every nonzero complex number has a multiplicative inverse given by either of the following equivalent formulas.       GeoGebra: reciprocal     Prove that the following identities hold for all .                           It is clear from our definition that has something that does not: a square-root of !   In fact, as we will show later, has roots of all non-constant polynomials.    Fundamental Theorem of Algebra  Every polynomial with complex coefficients of degree has a factorization   where the roots are distinct, and . This factorization is unique up to permuting the factors.   This Theorem follows by induction on degree from...   Every nonconstant polynomial with complex coefficients has a complex root.   We will prove this later in the course! Even though it seems like (and is) a theorem of algebra, its proof really needs analytic tools.  There is a complex solution to .  "
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
  "id": "theorem-fta",
  "level": "2",
  "url": "section-arithmetic.html#theorem-fta",
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
  "body": " Polar representation and Euler's Formula  As a point in the plane, a complex number has a polar representation:    In precalculus you would've written . This is the same thing, just written using instead of .     GeoGebra: polar representation    Notice that is simply the modulus of : . The angle between the positive real axis and the ray is called the argument of and is denoted . Notice that is a multivalued function! Adding to does not change .    The principal argument of a complex number , denoted , is the value of that satisfies .     Warning: Some authors use the convention that . Use caution when consulting other sources!    So, for , the possible values of are , where can be any integer.    , .    Euler's Formula  For now we take the following as a definition ; later we will see why it is justified.     Using Euler's Formula, we obtain the exponential form of the polar representation of :             Use trig identities to prove the following identities about          Let's try applying Euler's Formula to and then separately to .    The results of these two activities ought to be the same, and indeed if we identify real and imaginary parts we obtain the familiar addition formulas for sine and cosine!    This is a useful way to derive the addition formulas for sine and cosine without memorizing them. But the way we've presented things is a bit backward; in fact, it's the trig identities that allow us to conclude that .    Use trig identities to prove the following faacts about the argument.      With the help of the polar representation, we are in a position to understand exactly how complex multiplication works. Writing and , we have   So the product has modulus and argument .    GeoGebra: multiplication in polar coordinates     De Moivre's Theorem  We can identify real and imaginary parts in the following equation to obtain some trig identities.   Let's illustrate this by considering the example . Identifying real and imaginary parts of the equation   gives     Roots of unity  It is a special case of the Fundamental Theorem of Algebra ( ) that every nonzero complex number has exactly  th roots, i.e., solutions to . The case is already interesting (and of particular importance), so let's start there.  Finding the solutions to is made easier by considering the various polar representations of :   A reasonable guess (which turns out to be correct!) is that we can just divide the exponent on the righthand side by to obtain the possible values of .    For an integer , the th roots of unity are the complex numbers , where     Prove that the numbers listed in are in fact different numbers! Explain why they appear equally spaced around the unit circle .   The th roots of unity are:    Don't forget Euler's Formula! E.g. .     We can find the th roots of any nonzero complex number in a similar way. Suppose that is, say, the principal argument of , and consider the next many arguments:   Now simply take each of these different representations for to the th power to obtain the following list of -many th roots of .   Oh, we could instead have obtained this list by finding the first th root of and multiplying by all the th roots of unity! The th roots of are...   where are the th roots of unity.    GeoGebra: nth roots     Let be an unspecified real number. We are going to find the two square roots of the complex number in cartesian form ( ).    GeoGebra: roots example    Let's start by defining and .   So, in polar form, can be written as for any . So we should be able to take and as our two square-roots. But we still want them in rectangular coordinates, so we use Euler's Formula, some trig identities, and the fact that .   The other square-root is .    "
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
  "body": "  , .  "
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
  "body": " Some elementary functions  The rest of the course will be devoted to studying functions of a complex variable, that is, functions where . Because is inherently 2-dimensional, we cannot reasonably hope to graph a complex-valued function in the way that we did for functions in calculus. Instead, we think of complex-valued functions geometrically as transformations of the plane. In trying to understand a particular function, we will pay special attention to how familiar geometric shapes like lines and circles are transformed.   Multiplication and addition by a fixed number  The most basic complex-valued functions simply take a and add to it, or multiply it by, a fixed complex number .    GeoGebra: translation    Addition by a fixed complex number is just vector-translation. Remember that addition of complex numbers is just vector addition from multivariable calculus.    GeoGebra: multiplication by a fixed number    Multiplication by a fixed complex number is best thought of in polar coordinates, as the composite of two transformations. Notice that , for , just scales every point in the plane by a factor of . And the map , for a fixed , rotates the plane counterclockwise by radians. So the map is the composite of these two maps: it scales by a factor of and rotates by radians.    If you have seen some linear algebra, it is worth noting that scaling and rotating are linear maps! And you can analyze them using the tools of linear algebra. To do this, we first observe that the standard basis vectors and have (respectively) representations and as complex numbers. Since the maps and are both linear, their standard matrix representations can be found by looking at where they send the standard basis vectors.   The more interesting of the two maps is the rotation map , so let's see where it sends the standard basis vectors:   These two results give us the columns of the standard matrix of the linear transformation :   You might recognize this from linear algebra as a rotation matrix.     The Square Function  One of the simplest nontrivial functions is the squaring function . As we will see in many of these examples, it is useful to consider the map in polar coordinates.   In other words, the function is defined by declaring and .  The circle is mapped to the circle , traversed at double the angular velocity. In particular, the unit circle is mapped to itself, but traversed twice.    GeoGebra: Squaring 1      GeoGebra: Squaring 2       The Square Root Function  Every nonzero complex number should have two square-roots. The problem is that we want to choose one in a reasonable way. (We cannot simply choose the 'positive' one as we can with real numbers.) Looking in polar coordinates suggests that we should define   (Notice that the square-root on the right is the ordinary positive square-root of the nonnegative real number .)  But a complex number has many arguments ! The trouble comes from picking a particular .    GeoGebra: Square roots    As you can see in , using the principal argument for introduces a discontinuity at every point along the negative real axis. To fix this, we take a branch cut .    The principal branch of the square-root function is the function defined by .     Warning: Negative real numbers still have complex square roots!!! They are excluded from the domain of the principal branch of the square-root function only to ensure that the function is continuous. More about this later.  (In fact, the formula in can be used to get a square-root of a negative real number. Plugging in , we obtain as a square-root of .)  So the two square-roots of a complex number are and . (The first of these is the principal branch of the square-root, as long as .)        The Complex Exponential  Euler's Formula tells us how to exponentiate so-called purely imaginary numbers, that is numbers of the form where . But what about other complex numbers? Well, just decompose as , the sum of a real number (which we know how to exponentiate) and a purely imaginary number :   In other words, is the polar representation of : and .       A complex number is a period of the function if, for every , we have . A function is periodic if it has some nonzero period.      The complex exponential is -periodic.     For all we have:     For every real number , the quantity is a real number.      GeoGebra: The exponential map     We conclude from our previous discussion that the range of the exponential map is . This leads us to wonder about defining a logarithm.   The complex logarithm  We would like to define a log map that is inverse to the exponential. As we found with the square-root, we will have to make a branch cut in order to choose a specific log continuously, though.  Given , we want to find a solution to the equation . We need and . In fact we must have this; all logarithms of take the form for some choice of . So all logarithms of take the form     The principal branch of the log is the function defined by .    As with the square-root, we have to cut the domain in order for the function to be continuous. And, as with the square-root, negative real numbers still have logarithms!    GeoGebra: The log      All possible logs of are , .       Branch cuts and branch points  We can view the log, for example, as a multi-valued function on . Each time we use log, we need to choose a branch (often the principal one).    If is an open set, then a branch of the log defined on is a continuous function for which for all .  A branch point of a multi-valued function is a point such that, for every , the function cannot be given a continuous single-valued definition on .     is the ball of radius centered at . Don't worry, we'll discuss these things in more detail in later sections.    is a branch point of log.    The function has two branch points, at and .      General power functions  Now that we have the log, we can define general power functions.    For any , the principal branch of the power function  is the function defined as follows.      This agrees with our earlier definition of the principal branch of the square-root function:     Let's find all possible values of .   Since the possible values of are , , we have   These are all real numbers!!!     Trig functions  Standard trig functions can be defined in terms of the exponential.    Sine and cosine are defined at all complex numbers  as follows.      Remember your Taylor Series from calculus? Write down the Taylor series for the exponential function, centered at , and plug in and simplify. Do the same thing but plug in and simplify. You should be very close to a Taylor series for cosine.    Warning: These definitions are motivated by Euler's Formula: e.g. for ,   But in general! In particular, the quantity on the right is real-valued, whereas is not. And we can just expand out and examine its real and imaginary parts:   So , which does not typically equal .  The tangent function can be defined by , and hyperbolic trig functions can be defined similarly. You will explore all this on the homework.   "
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
  "id": "p-101",
  "level": "2",
  "url": "section-4.html#p-101",
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
  "id": "p-106",
  "level": "2",
  "url": "section-4.html#p-106",
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
  "body": " The function has two branch points, at and .   "
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
  "body": " Regions in the plane  We need to survey some basic topology of the plane and introduce some definitions. This will be very familiar to some of you and less familiar to others. Rest assured that we will not do any serious – proofs in this course.    For and we define the ball or disk of radius centered at .  A set is open if for every there is for which . A set is closed if its complement is open.   If you have seen sequential limits before, you should check that is closed if and only if every convergent sequence of elements of has a limit in .       GeoGebra: balls      GeoGebra: balls       The unbounded sector is open.    The vertical strip is open.    The closed annulus is closed.     If you have seen some topology, you might recognize that these are all continuous preimages of open or closed sets.      A set is path-connected iff any two points in can be joined by a continuous path that does not leave ; that is, iff for all there is a continuous function with and .  A domain is a set that is both open and path-connected.       is path-connected! For any we can take , the standard parametrization of the line segment from to .  But is not path-connected. No continuous path starting in the upper half-plane can reach the lower half-plane without crossing the real axis.  How do you prove this carefully? Intermediate Value Theorem...       If and , then is star-shaped with respect to iff for all the straight line segment connecting to lies completely in .  You could state this precisely by using the standard parametrization of the line segment. ' is star-shaped wrt iff for all we have .'    A set is convex if is star-shaped with respect to every one of its elements. We just say that is star-shaped if there is at least one with respect to which is star-shaped.      GeoGebra: star-shaped regions      The slit disk is star-shaped wrt but not wrt any point in the fourth quadrant (e.g. ).  An annulus (e.g. ) is not star-shaped.   Make sure you understand that for nonempty sets , the following implications hold. Give examples to show that neither of these implications reverses.  "
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
  "body": " The Complex Derivative    A function defined on a domain is differentiable at if the following limit exists.   The value of the limit is written or .  We say that is analytic (or holomorphic) at if there is such that is differentiable at every .  If is analytic at every point in , then we say that is entire . (In particular this means is defined at every point in .)     NB. This looks like the definition of derivative from calculus, and indeed we will discover many similarities between the complex derivative and real derivatives. However, a function can be thought of as a function , and there is a notion of real-differentiability for such functions. Complex-differentiability of as a function is much stronger than real-differentiability as a function . This should become clearer as we discover some general properties of analytic functions, especially the Cauchy–Riemann Equations.   A function can be decomposed into two component functions and so that . Notice that and are functions : their graphs are surfaces, just like in multivariable calculus. Then is real-differentiable if and only if both and are differentiable (meaning that they have well-defined tangent planes). (This is not usually taken as the definition , but it is equivalent.)       GeoGebra: The idea of the derivative    "
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
  "id": "fig-geogebra-idea-of-deriv",
  "level": "2",
  "url": "sec-derivative.html#fig-geogebra-idea-of-deriv",
  "type": "Figure",
  "number": "3.1.2",
  "title": "",
  "body": " GeoGebra: The idea of the derivative   "
},
{
  "id": "sec-cauchy-riemann",
  "level": "1",
  "url": "sec-cauchy-riemann.html",
  "type": "Section",
  "number": "3.2",
  "title": "The Cauchy–Riemann Equations",
  "body": " The Cauchy–Riemann Equations  The limit of the difference quotient from the definition of derivative   is really a multivariable calculus limit:   If this limit exists (meaning that is differentiable at ), then it must exist along the two coordinate directions. That is, in the special cases and we must get the same result. Let's explore that.   If exists, then as tends to the expression in must tend toward . But it must also equal , by the definition of partial derivatives! In other words, for and ,   Do the same thing in the -direction with and you'll get the following.   More compactly, . Identifying real and imaginary parts, we obtain the Cauchy–Riemann Equations.   Cauchy–Riemann Equations   Suppose that is defined on a domain and that . Then is (complex-)differentiable at if and only if and (construed as functions ) have continuous partial derivatives that satisfy the following equations, called the Cauchy–Riemann Equations , at .   In that case, we have     We have basically shown how to prove the forward direction. We will not give the proof of the other direction; it is an exercise in multivariable real analysis using Taylor's Theorem.      Let , so that where and . We know that this function (a polynomial) is differentiable everywhere, so we expect and to satisfy the Cauchy–Riemann Equations everywhere. Indeed, they do:     Consider the conjugation map . Then with and . In this case we have  , so the Cauchy–Riemann Equations hold nowhere . So the conjugation map is nowhere (complex-)differentiable, which might seem weird since it is a nice orthogonal transformation. In we will get another explanation: conjugation is not analytic because it fails to preserve angles, in particular their orientation.    The exponential map has real part and imaginary part . We see that the Cauchy–Riemann equations   hold everywhere, as expected since is entire. We also observe that      Using the Cauchy–Riemann Equations, we will several rigidity properties of analytic functions that start to give us a sense of what sort of functions can be analytic. We begin with an unsurprising complex analogue of a standard fact from single-variable calculus.    If is analytic on a domain and for every , then must be constant on .    Write , so that our assumption and the Cauchy–Riemann Equations give   Identifying real and imaginary parts, we see that on . It follows that the directional derivative for every direction vector , at every point of . Using this, one can show (using the fact that a plain ole function with derivative must be constant) that is constant along any line segment that lies completely in . But, since is path-connected, any two points can be joined by a finite sequence of line segments.  This actually requires a togological argument that we've swept under the rug. The gist of it is this: every point on a path from to has an open neighborhood that is included in , since is open. Only finitely many of these open neighborhoods are needed to cover the path by compactness. Now replace the portion of the path in the first ball with the straight-line path to where it exits the ball. Repeat with the remaining balls.  Since is constant along each of these line segments, . So is constant on .    If is analytic and real-valued on a domain , then must be constant on .    If and are both analytic on a domain , then is constant on .    There is a short proof from , but we will give a direct proof that does not appeal to a homework problem.  Write so that . The Cauchy–Riemann Equations for say: while the Cauchy–Riemann Equations for say: Adding these equations together gives . So on . By , it follows that is constant on .      If is analytic on a domain and is constant on , then is constant on .    If takes the constant value on , then takes the constant value on . So assume from now on that the constant value of on is not zero. Recall that . Rearrange to see that , which means that is a constant multiple of the analytic function ; therefore is analytic. Now we can apply to conclude that is constant on .    "
},
{
  "id": "thm-cauchy-riemann",
  "level": "2",
  "url": "sec-cauchy-riemann.html#thm-cauchy-riemann",
  "type": "Theorem",
  "number": "3.2.1",
  "title": "Cauchy–Riemann Equations.",
  "body": " Cauchy–Riemann Equations   Suppose that is defined on a domain and that . Then is (complex-)differentiable at if and only if and (construed as functions ) have continuous partial derivatives that satisfy the following equations, called the Cauchy–Riemann Equations , at .   In that case, we have    "
},
{
  "id": "example-16",
  "level": "2",
  "url": "sec-cauchy-riemann.html#example-16",
  "type": "Example",
  "number": "3.2.2",
  "title": "",
  "body": "   Let , so that where and . We know that this function (a polynomial) is differentiable everywhere, so we expect and to satisfy the Cauchy–Riemann Equations everywhere. Indeed, they do:     Consider the conjugation map . Then with and . In this case we have  , so the Cauchy–Riemann Equations hold nowhere . So the conjugation map is nowhere (complex-)differentiable, which might seem weird since it is a nice orthogonal transformation. In we will get another explanation: conjugation is not analytic because it fails to preserve angles, in particular their orientation.    The exponential map has real part and imaginary part . We see that the Cauchy–Riemann equations   hold everywhere, as expected since is entire. We also observe that     "
},
{
  "id": "lem-deriv-zero-constant",
  "level": "2",
  "url": "sec-cauchy-riemann.html#lem-deriv-zero-constant",
  "type": "Lemma",
  "number": "3.2.3",
  "title": "",
  "body": "  If is analytic on a domain and for every , then must be constant on .    Write , so that our assumption and the Cauchy–Riemann Equations give   Identifying real and imaginary parts, we see that on . It follows that the directional derivative for every direction vector , at every point of . Using this, one can show (using the fact that a plain ole function with derivative must be constant) that is constant along any line segment that lies completely in . But, since is path-connected, any two points can be joined by a finite sequence of line segments.  This actually requires a togological argument that we've swept under the rug. The gist of it is this: every point on a path from to has an open neighborhood that is included in , since is open. Only finitely many of these open neighborhoods are needed to cover the path by compactness. Now replace the portion of the path in the first ball with the straight-line path to where it exits the ball. Repeat with the remaining balls.  Since is constant along each of these line segments, . So is constant on .   "
},
{
  "id": "exercise-real-valued-const",
  "level": "2",
  "url": "sec-cauchy-riemann.html#exercise-real-valued-const",
  "type": "Checkpoint",
  "number": "3.2.4",
  "title": "",
  "body": "If is analytic and real-valued on a domain , then must be constant on . "
},
{
  "id": "prop-conj-const",
  "level": "2",
  "url": "sec-cauchy-riemann.html#prop-conj-const",
  "type": "Proposition",
  "number": "3.2.5",
  "title": "",
  "body": "  If and are both analytic on a domain , then is constant on .    There is a short proof from , but we will give a direct proof that does not appeal to a homework problem.  Write so that . The Cauchy–Riemann Equations for say: while the Cauchy–Riemann Equations for say: Adding these equations together gives . So on . By , it follows that is constant on .   "
},
{
  "id": "cor-modulus-const",
  "level": "2",
  "url": "sec-cauchy-riemann.html#cor-modulus-const",
  "type": "Corollary",
  "number": "3.2.6",
  "title": "",
  "body": "  If is analytic on a domain and is constant on , then is constant on .    If takes the constant value on , then takes the constant value on . So assume from now on that the constant value of on is not zero. Recall that . Rearrange to see that , which means that is a constant multiple of the analytic function ; therefore is analytic. Now we can apply to conclude that is constant on .   "
},
{
  "id": "sec-inverse",
  "level": "1",
  "url": "sec-inverse.html",
  "type": "Section",
  "number": "3.3",
  "title": "Analyticity of inverse functions",
  "body": " Analyticity of inverse functions  If you paid close attention in calculus, you right remember doing something like this to find the derivative of the logarithm.   You will be pleased to hear that we can do more-or-less the same thing in complex analysis! The key theorem should say, essentially, that the derivative of at should be the reciprocal of the derivative of at . The single-variable calculus version of this fact is illustrated by .    GeoGebra: Derivatives of Inverses      Suppose that is analytic on a domain , , and . There is a disk on which is one-to-one; moreover the image is open, and the inverse function is analytic and satisfies     We will not bother with a careful proof of here. Most of the hard work is handled by the Inverse Function Theorem; the formula is obtained just as in Calculus by applying the Chain Rule to the equation and solving for .   Where does the Inverse Function Theorem come in? you might wonder. Consider a function that is analytic on a domain . If we think of as the function , then it has a Jacobian matrix whose determinant can be computed using the Cauchy–Riemann Equations: So the Jacobian is zero exactly where the complex derivative is zero. This allows us to state in terms of the complex derivative instead of referring to the Jacobian.    The exponential function is entire and has nonzero derivative everywhere. The function Log (the principal branch) is an inverse of defined on , and it is analytic on its domain by . And its derivative is given by What's more, other branches of log differ from the principal branch by a constant, so they all have the same derivative!   Warning. Not every multifunction has the property that all its branches have the same derivative, because not every multifunction has the property that its branches all differ by a constant. Consider arccosine, for example. Or even the square-root, of the next exercise.   Make sure that you see why implies that every branch of the square-root is analytic, and , where the same square-root function is used on each side of the equation.  "
},
{
  "id": "fig-geogebra-deriv-inverse",
  "level": "2",
  "url": "sec-inverse.html#fig-geogebra-deriv-inverse",
  "type": "Figure",
  "number": "3.3.1",
  "title": "",
  "body": " GeoGebra: Derivatives of Inverses   "
},
{
  "id": "thm-deriv-inverse",
  "level": "2",
  "url": "sec-inverse.html#thm-deriv-inverse",
  "type": "Theorem",
  "number": "3.3.2",
  "title": "",
  "body": "  Suppose that is analytic on a domain , , and . There is a disk on which is one-to-one; moreover the image is open, and the inverse function is analytic and satisfies    "
},
{
  "id": "investigation-2",
  "level": "2",
  "url": "sec-inverse.html#investigation-2",
  "type": "Investigation",
  "number": "3.3.1",
  "title": "",
  "body": " Where does the Inverse Function Theorem come in? you might wonder. Consider a function that is analytic on a domain . If we think of as the function , then it has a Jacobian matrix whose determinant can be computed using the Cauchy–Riemann Equations: So the Jacobian is zero exactly where the complex derivative is zero. This allows us to state in terms of the complex derivative instead of referring to the Jacobian.  "
},
{
  "id": "example-17",
  "level": "2",
  "url": "sec-inverse.html#example-17",
  "type": "Example",
  "number": "3.3.3",
  "title": "",
  "body": " The exponential function is entire and has nonzero derivative everywhere. The function Log (the principal branch) is an inverse of defined on , and it is analytic on its domain by . And its derivative is given by What's more, other branches of log differ from the principal branch by a constant, so they all have the same derivative!   Warning. Not every multifunction has the property that all its branches have the same derivative, because not every multifunction has the property that its branches all differ by a constant. Consider arccosine, for example. Or even the square-root, of the next exercise.  "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "sec-inverse.html#exercise-7",
  "type": "Checkpoint",
  "number": "3.3.4",
  "title": "",
  "body": "Make sure that you see why implies that every branch of the square-root is analytic, and , where the same square-root function is used on each side of the equation. "
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
  "id": "proof-5",
  "level": "2",
  "url": "sec-harmonic.html#proof-5",
  "type": "Proof",
  "number": "3.4.1",
  "title": "",
  "body": " Later we will show that the real and imaginary parts of analytic functions have continuous partial derivatives of all orders. So let's not worry about that part for now.  This is just an application of the Cauchy–Riemann Equations and equality of mixed partials (sometimes called Clairaut's Theorem by calculus textbooks):   Rearranging gives . A very similar proof works for .  "
},
{
  "id": "example-18",
  "level": "2",
  "url": "sec-harmonic.html#example-18",
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
  "id": "exercise-8",
  "level": "2",
  "url": "sec-harmonic.html#exercise-8",
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
  "id": "p-220",
  "level": "2",
  "url": "sec-harmonic.html#p-220",
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
  "body": " Conformal mappings  The idea is that a conformal map should be one that preserves angles . To state this precisely, we will need tangent vectors.    Let be two continuous differentiable paths that intersect at : . Suppose also that and . Define the angle between and as follows.   A function is said to be conformal at if whenever are two continuously differentiable curves with and and , then (and and , so that is defined).    The point of all this is the following theorem.    If is analytic at and , then is conformal at .    This is basically just the Chain Rule and the fact that .   That's it!    There is a converse to this theorem that we state for completeness but we won't prove.    Suppose that is continuously differentiable and conformal on a domain with nonzero gradient at every point in . Then is analytic on , and for every .     The squaring function is (as a polynomial) analytic everywhere. It maps the sector to the sector of twice the aperture. Notice that this function is not conformal at since its derivative is zero there!     GeoGebra: transforms some curves conformally      GeoGebra: transforms some curves conformally     The exponential function is conformal at every . It restricts to a conformal equivalence between the horizontal strip to the slit plane .     GeoGebra:      If and are open subsets of and is a conformal bijection, then is called a conformal equivalence .     Don't forget that conformality is equivalent to analytic with derivative . So the Inverse Function Theorem implies that a conformal bijection has local conformal inverses, which can be patched together to give a global conformal inverse. All this to say that conformal equivalence is a symmetric relation: if is conformally equivalent to , then is conformally equivalent to .    Motivation: Suppose that we want to solve 2D Laplace's Equation on a domain subject to some boundary conditions. Maybe isn't so nice. We might try to find a conformally equivalent domain , solve Laplace's Equation on , and then transfer the solution back to .  So it is useful to have a library of conformal equivalences.   The map , , defines a conformal equivalence   where is the upper halfplane .    GeoGebra:      The map defines a conformal equivalence between and the unit disk .  (Why does this function even send the upper halfplane to the disk? Well, iff is closer to than to , iff , iff .)  Why is it conformal? Why is it a bijection? For the answers to those and other questions, look to the next Section!!!   "
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
  "id": "example-20",
  "level": "2",
  "url": "sec-conformal.html#example-20",
  "type": "Example",
  "number": "3.5.4",
  "title": "",
  "body": " The squaring function is (as a polynomial) analytic everywhere. It maps the sector to the sector of twice the aperture. Notice that this function is not conformal at since its derivative is zero there!  "
},
{
  "id": "fig-geogebra-square-conformal-1",
  "level": "2",
  "url": "sec-conformal.html#fig-geogebra-square-conformal-1",
  "type": "Figure",
  "number": "3.5.5",
  "title": "",
  "body": " GeoGebra: transforms some curves conformally   "
},
{
  "id": "fig-geogebra-square-conformal-2",
  "level": "2",
  "url": "sec-conformal.html#fig-geogebra-square-conformal-2",
  "type": "Figure",
  "number": "3.5.6",
  "title": "",
  "body": " GeoGebra: transforms some curves conformally   "
},
{
  "id": "example-21",
  "level": "2",
  "url": "sec-conformal.html#example-21",
  "type": "Example",
  "number": "3.5.7",
  "title": "",
  "body": " The exponential function is conformal at every . It restricts to a conformal equivalence between the horizontal strip to the slit plane .  "
},
{
  "id": "fig-geogebra-exp-conformal",
  "level": "2",
  "url": "sec-conformal.html#fig-geogebra-exp-conformal",
  "type": "Figure",
  "number": "3.5.8",
  "title": "",
  "body": " GeoGebra:   "
},
{
  "id": "def-conformal-equivalence",
  "level": "2",
  "url": "sec-conformal.html#def-conformal-equivalence",
  "type": "Definition",
  "number": "3.5.9",
  "title": "",
  "body": "  If and are open subsets of and is a conformal bijection, then is called a conformal equivalence .   "
},
{
  "id": "investigation-3",
  "level": "2",
  "url": "sec-conformal.html#investigation-3",
  "type": "Investigation",
  "number": "3.5.1",
  "title": "",
  "body": " Don't forget that conformality is equivalent to analytic with derivative . So the Inverse Function Theorem implies that a conformal bijection has local conformal inverses, which can be patched together to give a global conformal inverse. All this to say that conformal equivalence is a symmetric relation: if is conformally equivalent to , then is conformally equivalent to .  "
},
{
  "id": "example-22",
  "level": "2",
  "url": "sec-conformal.html#example-22",
  "type": "Example",
  "number": "3.5.10",
  "title": "",
  "body": " The map , , defines a conformal equivalence   where is the upper halfplane .    GeoGebra:    "
},
{
  "id": "example-baby-FLT",
  "level": "2",
  "url": "sec-conformal.html#example-baby-FLT",
  "type": "Example",
  "number": "3.5.12",
  "title": "",
  "body": " The map defines a conformal equivalence between and the unit disk .  (Why does this function even send the upper halfplane to the disk? Well, iff is closer to than to , iff , iff .)  Why is it conformal? Why is it a bijection? For the answers to those and other questions, look to the next Section!!!  "
},
{
  "id": "sec-flt",
  "level": "1",
  "url": "sec-flt.html",
  "type": "Section",
  "number": "3.6",
  "title": "Fractional Linear Transformations",
  "body": " Fractional Linear Transformations  In we saw an example of a conformal equivalence. This was in fact our second example of a Möbius Transformation , aka Fractional-linear Transformation (FLT) .    A Fractional-linear Transformation (aka FLT aka Möbius Transformation ) is a function of the form where are complex numbers satisfying .    (Notice that if we allowed then we'd simply get a constant map. Some authors allow this and call constant maps singular FLTs, so that ours would be non-singular FLTs.)     The function from is the FLT with , , , and .    Complex inversion is the FLT with , , , and .    The affine transformation is the FLT with , , and .     It is convenient to regard an FLT as a transformation of the extended complex plane by introducing the following conventions.  If then define .  If then set and set .   Where does come from? Divide the numerator and denominator of by and imagine what happens when tends toward .   If you have seen some linear algebra, then it is impossible to look at the condition in the definition of FLT and not wonder whether this has something to do with determinants. We are about to see that it does!      Every FLT is invertible, and its inverse is another FLT.    The composite of two FLTs is another FLT.      Consider an FLT . We will show more than what is stated in the Proposition. For the first part, define   (Notice that these parameters are exactly the same as the entries of the matrix inverse of the matrix !)  You can check that . (In fact, this follows from the next part of the proof.)  For part (b), consider FLTs and given by You might guess that corresponds to the product of the matrices and , and you'd be correct!  Check that and use linear algebra to explain why the new parameters satisfy the non-singular condition .     What's really going on? The map defines a group homomorphism  . (You don't need to know for this class what these things mean, but you might have seen them in other classes.)     Every FLT can be expressed as a composite of dilations ( ), translations ( ) and inversions ( ).    Dilation is a misnomer, since in the expression we allow to be any complex number. Remember that multiplication by a fixed complex number is really amplification by followed by rotation by .    Consider . Again, we consider separately the cases where and .  If then . This is the translation postcomposed by the dilation .  Now suppose that . Divide the numerator and denominator by in order to assume :   Now do some fraction arithmetic to get   Now can be written as a composite of translations, inversions, and translations. Look:   The proof is complete.     has the following important geometric corollary.    Every FLT is circle-preserving.    It is intuitively clear (and straightforward to check carefully) that dilations and translations are circle-preserving. And we already proved that the complex inversion map preserves circles by considering it as a transformation of the Riemann Sphere!     Before we move on to other geometric properties of FLTs, we should not forget that we know some calculus! What happens when we differentiate an FLT?   Notice that this is always nonzero, by our non-singularity condition! Together with the observation that an FLT is analytic everywhere it is defined (it is a rational function!), this amounts to a proof of the following Lemma.    An FLT is analytic wherever it is defined, and it is conformal.     Fixed-Point Property of FLTs   Every FLT other than the identity map has either one or two fixed points (counting the point at ). That is, there are either one or two solutions to .    As usual, we consider separately the cases where and . Suppose first that , so that our FLT can be written as . One fixed point is . If then is another:   If then , and so has no solutions other than .  Now suppose that . Then , so is not a fixed point. The equation can be rearranged into the quadratic equation , which has two solutions if . Otherwise the two solutions coalesce into just one fixed point: .       The FLT has two fixed points .    The FLT has two fixed points .      Three Points Property   If and are FLTs with three common values, i.e., then .    The function (is an FLT by and) has three fixed points so by must be the identity map.      For all distinct and all distinct there is a unique FLT satisfying , , and .   Let's start with , , and . (It is not obvious that this is what we should do, but hang in there and you'll see.)    For all distinct complex numbers there is a unique FLT satisfying , , and .    In order for to send to and to , must be proportional to . That is, for some . We plug in and to solve for . so . We conclude that the following FLT will do the trick:   (Remember that is the only variable in this expression. So the parameters of are e.g. . These have to be interpreted appropriately when you plug in or get in the denominator.)    By the Claim we can find a FLT that sends to (respectively) and another FLT that sends to (respectively). Now sends to .       We define the cross ratio of four complex numbers to be which is the image of under the unique FLT sending to .   Warning: different textbooks use different conventions for the cross ratio.       GeoGebra: a basic path    It is often useful to have an explicit form for the unique FLT sending to . It is given by solving the following equation for as a function of , after making appropriate changes to deal with :    Let's find the unique FLT sending to . We solve for . Easy! Get . Hey, this is the example from !    Let's find the unique FLT sending to . We solve the following equation for . We get        If is a FLT whose only fixed point is , then there is a nonzero for which .    If is a FLT whose fixed points are and , then there is for which .      Write . Notice that since is a fixed point of . (This follows from how we defined the extension of an FLT to the point at infinity.) So by changing names of constants we can write . If , then would be a fixed point of , contradicting our assumption. So . If then would be another fixed point of . So ; that is, , as desired.  For the second part, notice that must be the unique FLT that sends to , to , and to . But also has these properties, so . And , since has exactly two fixed points (and is therefore not the identity map).      FLTs preserve cross ratios. That is, if is an FLT then     The lefthand side of the equation is where is the unique FLT sending to . The righthand side of the equation is , where is the unique FLT sending to . But is also an FLT sending to , so it must be that . In particular, .    "
},
{
  "id": "p-246",
  "level": "2",
  "url": "sec-flt.html#p-246",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Möbius Transformation Fractional-linear Transformation (FLT) "
},
{
  "id": "def-FLT",
  "level": "2",
  "url": "sec-flt.html#def-FLT",
  "type": "Definition",
  "number": "3.6.1",
  "title": "",
  "body": "  A Fractional-linear Transformation (aka FLT aka Möbius Transformation ) is a function of the form where are complex numbers satisfying .   "
},
{
  "id": "p-248",
  "level": "2",
  "url": "sec-flt.html#p-248",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "singular non-singular "
},
{
  "id": "example-24",
  "level": "2",
  "url": "sec-flt.html#example-24",
  "type": "Example",
  "number": "3.6.2",
  "title": "",
  "body": "   The function from is the FLT with , , , and .    Complex inversion is the FLT with , , , and .    The affine transformation is the FLT with , , and .    "
},
{
  "id": "prop-FLT-homom",
  "level": "2",
  "url": "sec-flt.html#prop-FLT-homom",
  "type": "Proposition",
  "number": "3.6.3",
  "title": "",
  "body": "    Every FLT is invertible, and its inverse is another FLT.    The composite of two FLTs is another FLT.      Consider an FLT . We will show more than what is stated in the Proposition. For the first part, define   (Notice that these parameters are exactly the same as the entries of the matrix inverse of the matrix !)  You can check that . (In fact, this follows from the next part of the proof.)  For part (b), consider FLTs and given by You might guess that corresponds to the product of the matrices and , and you'd be correct!  Check that and use linear algebra to explain why the new parameters satisfy the non-singular condition .   "
},
{
  "id": "investigation-4",
  "level": "2",
  "url": "sec-flt.html#investigation-4",
  "type": "Investigation",
  "number": "3.6.1",
  "title": "",
  "body": " What's really going on? The map defines a group homomorphism  . (You don't need to know for this class what these things mean, but you might have seen them in other classes.)  "
},
{
  "id": "thm-FLT-decomp",
  "level": "2",
  "url": "sec-flt.html#thm-FLT-decomp",
  "type": "Theorem",
  "number": "3.6.4",
  "title": "",
  "body": "  Every FLT can be expressed as a composite of dilations ( ), translations ( ) and inversions ( ).    Dilation is a misnomer, since in the expression we allow to be any complex number. Remember that multiplication by a fixed complex number is really amplification by followed by rotation by .    Consider . Again, we consider separately the cases where and .  If then . This is the translation postcomposed by the dilation .  Now suppose that . Divide the numerator and denominator by in order to assume :   Now do some fraction arithmetic to get   Now can be written as a composite of translations, inversions, and translations. Look:   The proof is complete.   "
},
{
  "id": "cor-FLT-preserve-circles",
  "level": "2",
  "url": "sec-flt.html#cor-FLT-preserve-circles",
  "type": "Corollary",
  "number": "3.6.5",
  "title": "",
  "body": "  Every FLT is circle-preserving.    It is intuitively clear (and straightforward to check carefully) that dilations and translations are circle-preserving. And we already proved that the complex inversion map preserves circles by considering it as a transformation of the Riemann Sphere!    "
},
{
  "id": "lemma-4",
  "level": "2",
  "url": "sec-flt.html#lemma-4",
  "type": "Lemma",
  "number": "3.6.6",
  "title": "",
  "body": "  An FLT is analytic wherever it is defined, and it is conformal.   "
},
{
  "id": "prop-FLT-fixed-pts",
  "level": "2",
  "url": "sec-flt.html#prop-FLT-fixed-pts",
  "type": "Proposition",
  "number": "3.6.7",
  "title": "Fixed-Point Property of FLTs.",
  "body": " Fixed-Point Property of FLTs   Every FLT other than the identity map has either one or two fixed points (counting the point at ). That is, there are either one or two solutions to .    As usual, we consider separately the cases where and . Suppose first that , so that our FLT can be written as . One fixed point is . If then is another:   If then , and so has no solutions other than .  Now suppose that . Then , so is not a fixed point. The equation can be rearranged into the quadratic equation , which has two solutions if . Otherwise the two solutions coalesce into just one fixed point: .   "
},
{
  "id": "example-25",
  "level": "2",
  "url": "sec-flt.html#example-25",
  "type": "Example",
  "number": "3.6.8",
  "title": "",
  "body": "   The FLT has two fixed points .    The FLT has two fixed points .    "
},
{
  "id": "cor-FLT-three",
  "level": "2",
  "url": "sec-flt.html#cor-FLT-three",
  "type": "Corollary",
  "number": "3.6.9",
  "title": "Three Points Property.",
  "body": " Three Points Property   If and are FLTs with three common values, i.e., then .    The function (is an FLT by and) has three fixed points so by must be the identity map.   "
},
{
  "id": "thm-FLT-three-pts",
  "level": "2",
  "url": "sec-flt.html#thm-FLT-three-pts",
  "type": "Theorem",
  "number": "3.6.10",
  "title": "",
  "body": "  For all distinct and all distinct there is a unique FLT satisfying , , and .   Let's start with , , and . (It is not obvious that this is what we should do, but hang in there and you'll see.)    For all distinct complex numbers there is a unique FLT satisfying , , and .    In order for to send to and to , must be proportional to . That is, for some . We plug in and to solve for . so . We conclude that the following FLT will do the trick:   (Remember that is the only variable in this expression. So the parameters of are e.g. . These have to be interpreted appropriately when you plug in or get in the denominator.)    By the Claim we can find a FLT that sends to (respectively) and another FLT that sends to (respectively). Now sends to .    "
},
{
  "id": "def-cross-ratio",
  "level": "2",
  "url": "sec-flt.html#def-cross-ratio",
  "type": "Definition",
  "number": "3.6.12",
  "title": "",
  "body": "  We define the cross ratio of four complex numbers to be which is the image of under the unique FLT sending to .   Warning: different textbooks use different conventions for the cross ratio.    "
},
{
  "id": "fig-geogebra-cross-ratio",
  "level": "2",
  "url": "sec-flt.html#fig-geogebra-cross-ratio",
  "type": "Figure",
  "number": "3.6.13",
  "title": "",
  "body": " GeoGebra: a basic path   "
},
{
  "id": "example-26",
  "level": "2",
  "url": "sec-flt.html#example-26",
  "type": "Example",
  "number": "3.6.14",
  "title": "",
  "body": " Let's find the unique FLT sending to . We solve for . Easy! Get . Hey, this is the example from !  "
},
{
  "id": "example-27",
  "level": "2",
  "url": "sec-flt.html#example-27",
  "type": "Example",
  "number": "3.6.15",
  "title": "",
  "body": " Let's find the unique FLT sending to . We solve the following equation for . We get   "
},
{
  "id": "lem-FLT-only",
  "level": "2",
  "url": "sec-flt.html#lem-FLT-only",
  "type": "Lemma",
  "number": "3.6.16",
  "title": "",
  "body": "    If is a FLT whose only fixed point is , then there is a nonzero for which .    If is a FLT whose fixed points are and , then there is for which .      Write . Notice that since is a fixed point of . (This follows from how we defined the extension of an FLT to the point at infinity.) So by changing names of constants we can write . If , then would be a fixed point of , contradicting our assumption. So . If then would be another fixed point of . So ; that is, , as desired.  For the second part, notice that must be the unique FLT that sends to , to , and to . But also has these properties, so . And , since has exactly two fixed points (and is therefore not the identity map).   "
},
{
  "id": "lem-FLTs-preserve-cross-ratios",
  "level": "2",
  "url": "sec-flt.html#lem-FLTs-preserve-cross-ratios",
  "type": "Lemma",
  "number": "3.6.17",
  "title": "",
  "body": "  FLTs preserve cross ratios. That is, if is an FLT then     The lefthand side of the equation is where is the unique FLT sending to . The righthand side of the equation is , where is the unique FLT sending to . But is also an FLT sending to , so it must be that . In particular, .   "
},
{
  "id": "sec-def-contour-integrals",
  "level": "1",
  "url": "sec-def-contour-integrals.html",
  "type": "Section",
  "number": "4.1",
  "title": "Defining the contour integral",
  "body": " Defining the contour integral  The integral from single-variable calculus is defined over an interval of real numbers. An integral of a complex-valued function from a complex number to another complex number will more closely resemble integrals from multivariable calculus, since is inherently two-dimensional! In particular, the definition will depend on what path we choose to take from to .    A path is a continuous function for some . A path is simple if it doesn't cross itself, except possibly at its endpoints. That is, is simple if whenever then either or . A path is closed if . A contour is a path that is piecewise , i.e., a path that can be divided into finitely many paths each of which is continuously differentiable.       GeoGebra: a basic path      We first define the complex integral for paths in the complex plane. If is continuous, then we integrate by integrating its real and imaginary parts separately: Notice that the result is a complex number. But this is really just a prelude to the main event:  For a path and a continuous function , we define the integral of over as follows. Notice that the integral on the righthand side is defined by the first part of this definition (with ) to be The definition naturally extends to contours by adding integrals over pieces.    First, we emphasize two points: the product is complex multiplication , as we will see in the next paragraph. Even though this looks a lot like a definition you saw in multivariable calculus, it is not literally the same definition. (In the next section and on the homework you will untangle the connection, though.)  Second, notice that the result of integrating a complex-valued function over a curve will be a complex number, which is fundamentally two-dimensional! So it is not totally clear how to interpret an integral as a physical quantity. Like, what should its units be? We will start exploring this in the next section, and you will take the exploration further on the homework.  It is natural to wonder whether we've made a reasonable definition here, so let's give some motivation. Writing , , and , we discover the following.   On the other hand...   (We have omitted some calculations, which you should do carefully!)   Compute , where is the top half of the unit circle traversed from to . (We will see below that value of the integral does not depend on the parametrization of the curve, so feel free to use any parametrization of here.)  The given curve is parametrized by for . We see that and . That is all we need to compute the integral:     It is important to note that the integrand in a contour integral need not be analytic. We can integrate any continuous function of . (In the next few sections, we will see that amazing things happen when the integrand is analytic, though!)  Integrate over the top half of the circle , oriented counterclockwise.  The contour is parametrized by for . Plug this in and calculate:     Compute over the triangular curve through the points , , and , where .   We parametrize the three sides of the triangle and integrate along each piece separately; then we add the results together.  Along you should get . Along you should get . Along you should get . The total is .   "
},
{
  "id": "def-paths",
  "level": "2",
  "url": "sec-def-contour-integrals.html#def-paths",
  "type": "Definition",
  "number": "4.1.1",
  "title": "",
  "body": "  A path is a continuous function for some . A path is simple if it doesn't cross itself, except possibly at its endpoints. That is, is simple if whenever then either or . A path is closed if . A contour is a path that is piecewise , i.e., a path that can be divided into finitely many paths each of which is continuously differentiable.    "
},
{
  "id": "fig-geogebra-basic-path",
  "level": "2",
  "url": "sec-def-contour-integrals.html#fig-geogebra-basic-path",
  "type": "Figure",
  "number": "4.1.2",
  "title": "",
  "body": " GeoGebra: a basic path   "
},
{
  "id": "def-contour-integral",
  "level": "2",
  "url": "sec-def-contour-integrals.html#def-contour-integral",
  "type": "Definition",
  "number": "4.1.3",
  "title": "",
  "body": "  We first define the complex integral for paths in the complex plane. If is continuous, then we integrate by integrating its real and imaginary parts separately: Notice that the result is a complex number. But this is really just a prelude to the main event:  For a path and a continuous function , we define the integral of over as follows. Notice that the integral on the righthand side is defined by the first part of this definition (with ) to be The definition naturally extends to contours by adding integrals over pieces.   "
},
{
  "id": "example-28",
  "level": "2",
  "url": "sec-def-contour-integrals.html#example-28",
  "type": "Example",
  "number": "4.1.4",
  "title": "",
  "body": " Compute , where is the top half of the unit circle traversed from to . (We will see below that value of the integral does not depend on the parametrization of the curve, so feel free to use any parametrization of here.)  The given curve is parametrized by for . We see that and . That is all we need to compute the integral:   "
},
{
  "id": "example-29",
  "level": "2",
  "url": "sec-def-contour-integrals.html#example-29",
  "type": "Example",
  "number": "4.1.5",
  "title": "",
  "body": " It is important to note that the integrand in a contour integral need not be analytic. We can integrate any continuous function of . (In the next few sections, we will see that amazing things happen when the integrand is analytic, though!)  Integrate over the top half of the circle , oriented counterclockwise.  The contour is parametrized by for . Plug this in and calculate:   "
},
{
  "id": "example-30",
  "level": "2",
  "url": "sec-def-contour-integrals.html#example-30",
  "type": "Example",
  "number": "4.1.6",
  "title": "",
  "body": " Compute over the triangular curve through the points , , and , where .   We parametrize the three sides of the triangle and integrate along each piece separately; then we add the results together.  Along you should get . Along you should get . Along you should get . The total is .  "
},
{
  "id": "sec-basic-integral-props",
  "level": "1",
  "url": "sec-basic-integral-props.html",
  "type": "Section",
  "number": "4.2",
  "title": "Basic properties and the Fundamental Theorem",
  "body": " Basic properties and the Fundamental Theorem    The integral is independent of parametrization. That is, if , , and satisfy , then     This follows from the definition of the contour integral and the substitution rule (aka u-sub ) for the usual Calc I integral:   (For the third equality, we did a u-substitution with .)         and .    Suppose that is a contour and that . Let be the restriction of to and let be the restriction of to . Then      where is the reverse of defined by .     where . (This is the same definition of arclength from multivariable calculus.)      We'll prove , but the proofs of the remaining properties are left as exercises.  Property follows from the definition and the similar bounding box property of standard Calc I integrals:   That's what we wanted to prove.     Take the standard parametrization of the unit circle: , . Let for an unspecified . Let's compute :   which equals if and otherwise.   We aim to prove a version of the Fundamental Theorem of Calculus for contour integrals. First we need a simple version for functions :    Suppose that and are two paths for which . Then .    This follows immediately from the defintion of integrals for paths like this and the Fundamental Theorem of Calculus.       If on a domain and is a contour, then .     Apply to and .    Let's revisit . We're considering and for . If , then is an antiderivative of on . So .  On the other hand, if , then , but the complex logarithm can be defined continuously only on a slit plane. In fact, because does not vanish on the unit circle, there cannot be a continuous branch of the log defined on any domain that includes the unit circle. Now we have a proof of that fact!   An especially important consequence of the FTC for contour integrals is that if has an antiderivative, then integrates to over any closed curve. As we will see in the next section, this implication reverses!  "
},
{
  "id": "lem-integral-reparametrize",
  "level": "2",
  "url": "sec-basic-integral-props.html#lem-integral-reparametrize",
  "type": "Lemma",
  "number": "4.2.1",
  "title": "",
  "body": "  The integral is independent of parametrization. That is, if , , and satisfy , then     This follows from the definition of the contour integral and the substitution rule (aka u-sub ) for the usual Calc I integral:   (For the third equality, we did a u-substitution with .)   "
},
{
  "id": "lem-integral-basic-props",
  "level": "2",
  "url": "sec-basic-integral-props.html#lem-integral-basic-props",
  "type": "Lemma",
  "number": "4.2.2",
  "title": "",
  "body": "     and .    Suppose that is a contour and that . Let be the restriction of to and let be the restriction of to . Then      where is the reverse of defined by .     where . (This is the same definition of arclength from multivariable calculus.)      We'll prove , but the proofs of the remaining properties are left as exercises.  Property follows from the definition and the similar bounding box property of standard Calc I integrals:   That's what we wanted to prove.   "
},
{
  "id": "example-power-function",
  "level": "2",
  "url": "sec-basic-integral-props.html#example-power-function",
  "type": "Example",
  "number": "4.2.3",
  "title": "",
  "body": " Take the standard parametrization of the unit circle: , . Let for an unspecified . Let's compute :   which equals if and otherwise.  "
},
{
  "id": "lem-FTC-easy",
  "level": "2",
  "url": "sec-basic-integral-props.html#lem-FTC-easy",
  "type": "Lemma",
  "number": "4.2.4",
  "title": "",
  "body": "  Suppose that and are two paths for which . Then .    This follows immediately from the defintion of integrals for paths like this and the Fundamental Theorem of Calculus.    "
},
{
  "id": "thm-FTC",
  "level": "2",
  "url": "sec-basic-integral-props.html#thm-FTC",
  "type": "Theorem",
  "number": "4.2.5",
  "title": "",
  "body": "  If on a domain and is a contour, then .   "
},
{
  "id": "proof-19",
  "level": "2",
  "url": "sec-basic-integral-props.html#proof-19",
  "type": "Proof",
  "number": "4.2.1",
  "title": "",
  "body": " Apply to and .  "
},
{
  "id": "example-32",
  "level": "2",
  "url": "sec-basic-integral-props.html#example-32",
  "type": "Example",
  "number": "4.2.6",
  "title": "",
  "body": " Let's revisit . We're considering and for . If , then is an antiderivative of on . So .  On the other hand, if , then , but the complex logarithm can be defined continuously only on a slit plane. In fact, because does not vanish on the unit circle, there cannot be a continuous branch of the log defined on any domain that includes the unit circle. Now we have a proof of that fact!  "
},
{
  "id": "sec-cauchys-thm",
  "level": "1",
  "url": "sec-cauchys-thm.html",
  "type": "Section",
  "number": "4.3",
  "title": "Cauchy's Theorem",
  "body": " Cauchy's Theorem    Suppose that is a continuous function defined on a domain . The following are equivalent:     has an antiderivative on ;   for all the integral is independent of path , meaning that for all contours with and we have ;    for all closed paths we have .      We'll give the proofs of all the easy directions here and leave the difficult direction for a separate proposition.  First, notice that we already observed that implies after our discussion of the FTC for contour integrals. It is not too difficult to see that conditions and are equivalent. Assume and suppose that is closed. Divide into two paths, from to and from back to . (It does not matter where this division happens.) Using path-independence and the basic properties of contour integrals, we have   from which we conclude that So implies . The proof of the converse uses similar ideas and is left as an exercise.  So it remains to show that implies , which we leave to because it will be useful to have a refinement of this result.    Notice that when we say that has an antiderivative here, we mean that it has a complex antiderivative, i.e., a function for which .   should remind you of a theorem from multivariable calculus. In fact you can use one to prove the other; see .    Suppose that is a star-shaped domain, is continuous, and for all triangles . Then has an antiderivative on .    Let be a point of with respect to which is star-shaped. For define , where is the straight-line path from to . (Notice that lies completely in , since is star-shaped wrt .)    GeoGebra: a basic path    We aim to show that . Since is open, there is for which . Let . Let be the triangle formed by , and , with boundary oriented counterclockwise. Notice that is completely included in , since every point on the line segment is (by choice of ), and since is star-shaped wrt . We can therefore apply our assumption to conclude that . On the other hand, this expression also equals , so we rearrange to obtain   What we'd really like to estimate is the difference quotient , so we rearrange further.   Now we are in a position to make the final estimate.   which tends to as tends to , since is continuous.    Redo the proof of without the assumption that is star-shaped, but assuming that for all closed contours (not only triangles) in . (Choose to be any element of , and take to be any path from to that lies completely inside .) Make sure you have a complete proof of .  The goal now is to prove Cauchy's Theorem for star-shaped domains, which says that if is a star-shaped domain and is analytic on , then for all closed contours in . In light of and , it suffices to prove the special case where is triangular.   Cauchy's Theorem for Triangles   Suppose that is a domain and that is analytic on . If is a triangle, then .    This is a serious proof! Fix a triangle and put . Also write for the perimeter of . Our plan is to bound , showing that for all . Divide into four subtriangles by taking the midpoints of each of the three sides. As indicated by the picture, these four subtriangles can be oriented in such a way that    It follows that one of the four satisfies . Call that one . Notice that the four subtriangles are each similar (in the sense of geometry) to with edge-lengths halved, so .  Iterate this process. At stage we have triangles each of perimeter and a particular one with . These triangles form a nested sequence of closed sets of diameter tending to , so by Compactness there is a unique point . We assumed that was analytic at , so, fixing arbitrary , we must have a for which the following inequality holds for every .   Rearrange:   Let be large enough that . We rewrite in the following non-obvious way, using the fact that constant functions integrate to over closed contours by the FTC.   Now we just need to do an ML estimate:   (In the second line we used the fact that ; in the third we used an ML inequality; and in the fourth we used the fact that the distance between any two points of a triangle is at most its perimeter.)  Putting everything together, we obtain the following.   But was arbitrary and is fixed, so .   Subdivided triangles.   Subdivided triangles        Cauchy's Theorem for star-shaped domains   Suppose that is star-shaped and is analytic on . Then for any closed contour in , we have .    Apply to conclude that integrates to over any triangle in . Then apply to conclude that has an antiderivative on . Finally, we can apply to conclude that for any closed contour in , we have .     NB. Cauchy's Theorem holds for all simply connected domains, not just star-shaped domains. But notice that for example integrates to a nonzero value over the unit circle, so Cauchy's Theorem does not extend to all domains.  For a short proof of Cauchy's Theorem that uses Green's Theorem, see .  "
},
{
  "id": "thm-antiderivative-conditions",
  "level": "2",
  "url": "sec-cauchys-thm.html#thm-antiderivative-conditions",
  "type": "Theorem",
  "number": "4.3.1",
  "title": "",
  "body": "  Suppose that is a continuous function defined on a domain . The following are equivalent:     has an antiderivative on ;   for all the integral is independent of path , meaning that for all contours with and we have ;    for all closed paths we have .      We'll give the proofs of all the easy directions here and leave the difficult direction for a separate proposition.  First, notice that we already observed that implies after our discussion of the FTC for contour integrals. It is not too difficult to see that conditions and are equivalent. Assume and suppose that is closed. Divide into two paths, from to and from back to . (It does not matter where this division happens.) Using path-independence and the basic properties of contour integrals, we have   from which we conclude that So implies . The proof of the converse uses similar ideas and is left as an exercise.  So it remains to show that implies , which we leave to because it will be useful to have a refinement of this result.   "
},
{
  "id": "p-351",
  "level": "2",
  "url": "sec-cauchys-thm.html#p-351",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "antiderivative "
},
{
  "id": "prop-triangles-antiderivative",
  "level": "2",
  "url": "sec-cauchys-thm.html#prop-triangles-antiderivative",
  "type": "Proposition",
  "number": "4.3.2",
  "title": "",
  "body": "  Suppose that is a star-shaped domain, is continuous, and for all triangles . Then has an antiderivative on .    Let be a point of with respect to which is star-shaped. For define , where is the straight-line path from to . (Notice that lies completely in , since is star-shaped wrt .)    GeoGebra: a basic path    We aim to show that . Since is open, there is for which . Let . Let be the triangle formed by , and , with boundary oriented counterclockwise. Notice that is completely included in , since every point on the line segment is (by choice of ), and since is star-shaped wrt . We can therefore apply our assumption to conclude that . On the other hand, this expression also equals , so we rearrange to obtain   What we'd really like to estimate is the difference quotient , so we rearrange further.   Now we are in a position to make the final estimate.   which tends to as tends to , since is continuous.   "
},
{
  "id": "exerc-antiderivatives-loose-end",
  "level": "2",
  "url": "sec-cauchys-thm.html#exerc-antiderivatives-loose-end",
  "type": "Checkpoint",
  "number": "4.3.4",
  "title": "",
  "body": "Redo the proof of without the assumption that is star-shaped, but assuming that for all closed contours (not only triangles) in . (Choose to be any element of , and take to be any path from to that lies completely inside .) Make sure you have a complete proof of . "
},
{
  "id": "thm-cauchy-triangles",
  "level": "2",
  "url": "sec-cauchys-thm.html#thm-cauchy-triangles",
  "type": "Theorem",
  "number": "4.3.5",
  "title": "Cauchy's Theorem for Triangles.",
  "body": " Cauchy's Theorem for Triangles   Suppose that is a domain and that is analytic on . If is a triangle, then .    This is a serious proof! Fix a triangle and put . Also write for the perimeter of . Our plan is to bound , showing that for all . Divide into four subtriangles by taking the midpoints of each of the three sides. As indicated by the picture, these four subtriangles can be oriented in such a way that    It follows that one of the four satisfies . Call that one . Notice that the four subtriangles are each similar (in the sense of geometry) to with edge-lengths halved, so .  Iterate this process. At stage we have triangles each of perimeter and a particular one with . These triangles form a nested sequence of closed sets of diameter tending to , so by Compactness there is a unique point . We assumed that was analytic at , so, fixing arbitrary , we must have a for which the following inequality holds for every .   Rearrange:   Let be large enough that . We rewrite in the following non-obvious way, using the fact that constant functions integrate to over closed contours by the FTC.   Now we just need to do an ML estimate:   (In the second line we used the fact that ; in the third we used an ML inequality; and in the fourth we used the fact that the distance between any two points of a triangle is at most its perimeter.)  Putting everything together, we obtain the following.   But was arbitrary and is fixed, so .   Subdivided triangles.   Subdivided triangles      "
},
{
  "id": "cor-cauchys-thm",
  "level": "2",
  "url": "sec-cauchys-thm.html#cor-cauchys-thm",
  "type": "Corollary",
  "number": "4.3.7",
  "title": "Cauchy's Theorem for star-shaped domains.",
  "body": " Cauchy's Theorem for star-shaped domains   Suppose that is star-shaped and is analytic on . Then for any closed contour in , we have .    Apply to conclude that integrates to over any triangle in . Then apply to conclude that has an antiderivative on . Finally, we can apply to conclude that for any closed contour in , we have .   "
},
{
  "id": "sec-connections-to-multivariable",
  "level": "1",
  "url": "sec-connections-to-multivariable.html",
  "type": "Section",
  "number": "4.4",
  "title": "Connections to multivariable calculus",
  "body": " Connections to multivariable calculus  After reading the sections about contour integrals, you probably can't help noticing a strong resemblance to the theory of line integrals from multivariable calculus. First, notice that unlike a real line integral, the value of a contour integral is a complex number, i.e., a point in the plane! The key to making connections to multivariable calculus is to decompose this into its real and imaginary parts:   so we can use this to decompose the contour integral into two multivariable-calculus circulation integrals:   Let be the vector field associated to the conjugate of . Prove that where  Let's give an alternative proof of Cauchy's Theorem using Green's Theorem. (The reason for giving a separate, much longer, proof in class is that most of you haven't seen a proof of Green's Theorem!)    If is analytic on a simply connected domain , then for every closed path in .    The key is , which decomposes into its real and imaginary parts. Each of those parts is a vector integral to which we can apply Green's Theorem. Writing for the region enclosed by , we have the following.   (Notice that we used the Cauchy–Riemann Equations in each line.) We conclude that .    Give a proof along similar lines that a function that integrates to along every closed contour must have an antiderivative. Use the theorem from multivariable calculus that a circulation-free vector field must have a potential function.  "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "sec-connections-to-multivariable.html#exercise-10",
  "type": "Checkpoint",
  "number": "4.4.1",
  "title": "",
  "body": "Let be the vector field associated to the conjugate of . Prove that where "
},
{
  "id": "thm-Cauchy-green",
  "level": "2",
  "url": "sec-connections-to-multivariable.html#thm-Cauchy-green",
  "type": "Theorem",
  "number": "4.4.2",
  "title": "",
  "body": "  If is analytic on a simply connected domain , then for every closed path in .    The key is , which decomposes into its real and imaginary parts. Each of those parts is a vector integral to which we can apply Green's Theorem. Writing for the region enclosed by , we have the following.   (Notice that we used the Cauchy–Riemann Equations in each line.) We conclude that .   "
},
{
  "id": "exercise-antiderivative-conditions-multi",
  "level": "2",
  "url": "sec-connections-to-multivariable.html#exercise-antiderivative-conditions-multi",
  "type": "Checkpoint",
  "number": "4.4.3",
  "title": "",
  "body": "Give a proof along similar lines that a function that integrates to along every closed contour must have an antiderivative. Use the theorem from multivariable calculus that a circulation-free vector field must have a potential function. "
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
